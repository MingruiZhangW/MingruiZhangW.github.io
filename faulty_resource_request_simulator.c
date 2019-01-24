#include <stdio.h>  //for printf and scanf
#include <stdlib.h> //for malloc
#include <stdio.h>
#include <pthread.h>
#include <signal.h>
#include <stdlib.h>
#include <unistd.h>
#include <limits.h>
#include <semaphore.h>
#include <string.h>

//gcc Assignment3_part3.c -pthread

// sem for murex
sem_t mutex;
// sem for representing a thread is waiting for resources in Banker
sem_t wait_For_Source_B;

int numProcess,disResource, *unitResource, **maxClaim, **Hold, **Need, **request, status;

void *faulty_Process(void* args);
void *deadlock_Detection(void* args);
void *Process_to_run(void* process_index);
void Banker_Algo(int process_index_real, int resource_index_real);
int isSafe(int resource_index_real);

// faulty process thread function

void *faulty_Process(void* args){

    while(1){

        sleep(10);
        int resource_index_rand = 0;
        // rand() function will generate odd or even
        // number with equal probability. If rand()
        // generates odd number, the function will
        // return 1 else it will return 0.
        int proboility = rand() & 1;
        if(proboility == 1){

            sem_wait(&mutex);
            resource_index_rand = rand() % (disResource - 1);
            printf("Faulty Occurs on Resource %d\n", resource_index_rand);
            unitResource[resource_index_rand] = 1;
            sem_post(&mutex);
            break;

        }

    }

}

// Deadlock detecting thread function

void *deadlock_Detection(void* args){

    while(1){

        sleep(10);
        int count_pro = 0;
        sem_wait(&mutex);
        for (int i = 0; i < numProcess; i ++){

            for (int j = 0; j < disResource; j ++)
            {

                if(Need[i][j] > unitResource[j]){

                    count_pro ++;
                    break;

                }

            }

        }
        if(count_pro >= numProcess){

            printf("Deadlock will occur as processes request more resources, exiting...\n");
            exit(0);

        }
        sem_post(&mutex);

    }

}

// Thread functions representing process

void *Process_to_run(void* process_index){

    // Convert input to actual data
    int *process_index_real = (int *)process_index;
    printf("Requesting resources for Process %d\n", *process_index_real + 1);
    sem_wait(&mutex);
    // rand function parameter
    srand(time(0));
    // Generating requests and run Banker to avoid Deadlock
    for(int i = 0; i < disResource; i ++){

        request[(*process_index_real)][i] = rand() % Need[(*process_index_real)][i];
        // if there is a valid request
        if(request[(*process_index_real)][i] != 0){
            printf("Process %d is currently requesting %d for Resources %d\n", *process_index_real + 1, request[(*process_index_real)][i], i + 1);
            Banker_Algo(*process_index_real, i);
            // one of the requests is finished
            if(i != disResource - 1){

                sem_post(&mutex);
                sleep(3);
                sem_wait(&mutex);

            }

        }

    }
    // Relinquish the resources 
    printf("Relinquishing the resources for Process %d\n", *process_index_real + 1);
    for (int j = 0; j < disResource; j ++)
    {
        
        unitResource[j] = unitResource[j] + Hold[*process_index_real][j];
        Hold[*process_index_real][j] = 0;
        Need[*process_index_real][j] = 0;

    }
    printf("Finish Process %d\n", *process_index_real + 1);
    sem_post(&mutex);

}

void Banker_Algo(int process_index_real, int resource_index_real){

    printf("Run Banker for Process %d, Resource %d\n", process_index_real + 1, resource_index_real + 1);
    // Condition check
    // the following algorithm is designed according to the slides
    short B = 0;
    while(B == 0){

        if (request[process_index_real][resource_index_real] > Need[process_index_real][resource_index_real]){

            printf("Process %d matches its need, Error\n", process_index_real + 1);
            exit(0);

        }
        if(request[process_index_real][resource_index_real] > unitResource[resource_index_real]){

            printf("The requested amount is not available for Process %d, Resource %d, Waiting\n", process_index_real + 1, resource_index_real + 1);
            sem_post(&mutex);
            sem_wait(&wait_For_Source_B);

        }
        else{

            // Provisional allocation
            printf("Provisional allocation for Process %d, Resource %d, Checking for Safety\n", process_index_real + 1, resource_index_real + 1);
            unitResource[resource_index_real] = unitResource[resource_index_real] - request[process_index_real][resource_index_real];
            Hold[process_index_real][resource_index_real] = Hold[process_index_real][resource_index_real] + request[process_index_real][resource_index_real];
            Need[process_index_real][resource_index_real] = Need[process_index_real][resource_index_real] - request[process_index_real][resource_index_real];
            if(isSafe(resource_index_real) == 1){

                B = 1;
                sem_post(&wait_For_Source_B);
                printf("Allocation is safe for Process %d, Resource %d\n", process_index_real + 1, resource_index_real + 1);

            }
            else{

                // Canclle allocation
                printf("Allocation is not safe for Process %d, Resource %d, Canclling and Waiting\n", process_index_real + 1, resource_index_real + 1);
                unitResource[resource_index_real] = unitResource[resource_index_real] + request[process_index_real][resource_index_real];
                Hold[process_index_real][resource_index_real] = Hold[process_index_real][resource_index_real] - request[process_index_real][resource_index_real];
                Need[process_index_real][resource_index_real] = Need[process_index_real][resource_index_real] + request[process_index_real][resource_index_real];
                sem_post(&mutex);
                sem_wait(&wait_For_Source_B);

            }

        }

    }

}

int isSafe(int resource_index_real){

    // Following algorithm is designed according to the slides
    int isSafe = 0;
    int Work[disResource];
    int Finish[numProcess];
    int count_true = 0;
    // assign work
    for(int i = 0; i < disResource; i++)
    {
        Work[i] = unitResource[i];
    }
    for(int i = 0; i < numProcess; i++){

        // Finish all flase
        Finish[i] = 0;

    }
    while(1){

            for (int i = 0; i < numProcess; i ++){

                if(Finish[i] == 0){

                    if(Need[i][resource_index_real] <= Work[resource_index_real]){

                        Work[resource_index_real] = Work[resource_index_real] + Hold[i][resource_index_real];
                        Finish[i] = 1;
                        break;

                    }

                }
                if(i == numProcess - 1){

                    for (int x = 0; x < numProcess; x ++){

                        // if all true?
                        if(Finish[x] == 1){

                            count_true ++;

                        }

                    }
                    if(count_true == numProcess){

                        isSafe = 1;
                        return isSafe;

                    }
                    else{

                        return isSafe;

                    }

                }

        }

    }

}

int main()
{

    //allocate memory to store requests
    printf("Enter number of processes: \n");
    scanf("%d", &numProcess);

    printf("Enter number of resources: \n");
    scanf("%d", &disResource);

    printf("Enter Available Resources: \n");
    unitResource = malloc(disResource * sizeof(int));
    for (int i = 0; i < disResource; i++)
    {
        scanf("%d", &unitResource[i]);
    }
    printf("Enter Maximum Resources Each Process Can Claim: \n");
    maxClaim = (int **)malloc(numProcess * sizeof(int *));
    Hold = (int **)malloc(numProcess * sizeof(int *));
    Need = (int **)malloc(numProcess * sizeof(int *));
    request = (int **)malloc(numProcess * sizeof(int *));
    for (int i = 0; i < numProcess; i++)
    {
        maxClaim[i] = (int *)malloc(disResource * sizeof(int));
        Hold[i] = (int *)malloc(disResource * sizeof(int));
        Need[i] = (int *)malloc(disResource * sizeof(int));
        request[i] = (int *)malloc(disResource * sizeof(int));
    }
    // Here we assume that Hold is zero
    for (int i = 0; i < numProcess; i ++){

        for (int j = 0; j < disResource; j ++)
        {
            // assume initial hold is zero
            scanf("%d", &maxClaim[i][j]);
            Hold[i][j] = 0;
            Need[i][j] = maxClaim[i][j];
            request[i][j] = 0;

        }

    }
    printf("The Maximum Claim table is : ");
    printf("\n");
    for (int i = 0; i < numProcess; i ++){

        for (int j = 0; j < disResource; j ++)
        {
            // assume initial hold is zero
            printf("%d ", maxClaim[i][j]);

        }
        printf("\n");

    }
    printf("\n");
    printf("The Available Resources array is : ");
    for(int i = 0; i < disResource; i++){

        printf("%d ", unitResource[i]);

    }
    printf("\n");

    // Creating threads and sem
    pthread_t Process_sim[numProcess];
    pthread_t faulty_thread;
    pthread_t deadlock_thread;
    int *index = malloc(numProcess * sizeof(int));;
    int pshared = 0;
    if(sem_init(&mutex, pshared, 1) == -1){

        exit(0);

    }
    if(sem_init(&wait_For_Source_B, pshared, 0) == -1){

        exit(0);

    }

    status = pthread_create(&(faulty_thread), NULL, faulty_Process, NULL);
    if(status != 0){

        exit(0);

    }

    status = pthread_create(&(deadlock_thread), NULL, deadlock_Detection, NULL);
    if(status != 0){

        exit(0);

    }

    for(int i = 0; i < numProcess; i ++){
        
        // pass the process id
        index[i] = i;
        printf("Creating Process %d\n",index[i] + 1);
        status = pthread_create(&(Process_sim[i]), NULL, Process_to_run, &(index[i]));
        if(status != 0){

            exit(0);

        }
        
    }

    // Joins all threads

    for(int i = 0; i < numProcess; i ++){

        (void) pthread_join(Process_sim[i], NULL);

    }

    // free the memory
   for (int i = 0; i < numProcess; i ++) {

    free(Hold[i]);
    free(Need[i]);
    free(maxClaim[i]);

   }
    free(Hold);
    free(Need);
    free(maxClaim);
    return 0;
}