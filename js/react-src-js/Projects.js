export default function Projects(props) {
    return (
        <div className={props.requiredProjectsClassName} onAnimationEnd={props.projectsAnimationEnded}>
            <div className="project_info">
                <a className="view_github" href="https://github.com/MingruiZhangW"
                   target="_blank" rel="noopener noreferrer"
                   title="Ming's GitHub">
                       <i className="fa fa-github"></i>
                </a>
            </div>
            <div className="project_info">
                <h1>A Simple DFO Like Game</h1>
                <img className="dfo_like_game_main_page"
                     src="resources/img/main_page.png" alt="Main Page"/>
                <div className="project_desp">
                    <p>
                        Dungeon Fighter Online (DFO), known in China as Dungeon &
                        Fighter (DNF), is a multiplayer beat-’em-up action role-playing
                        game (Dungeon fighter online 2022). In general, the players in this
                        game could traverse 2d screens while fighting hordes of monsters
                        with their unique skills. A basic demonstration of the gameplay can
                        be found <a className="normal_web_link" 
                                    title="【Citris】天帷巨兽篇"
                                    href="https://www.bilibili.com/video/BV1dF411p73R?share_source=copy_web&vd_source=36c43cc5514d74d7b9d83cae3b5b10e1"
                                    target="_blank" rel="noopener noreferrer">here</a>,
                        and a more advanced gameplay with more can be found <a className="normal_web_link" 
                                                                               title="【馄饨哥剑魂常规MP刷图装绿沙袋1390亿！】"
                                    href="https://www.bilibili.com/video/BV1a34y1W7TC?share_source=copy_web&vd_source=36c43cc5514d74d7b9d83cae3b5b10e1"
                                    target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <p> 
                        For this project, the goal is to create a simplified DFO-like 2d
                        game by using pure OpenGL. The game will contain one main
                        character for the player to use, one type of monster, and one NPC.
                        A small story, a basic game flow, and some BGMs in general will
                        provide the player with a relatively complete experience. Some UI
                        elements, including dialog boxes, buttons, etc., are also presented
                        throughout the game.
                    </p>
                </div>
                <div className="intern_video">
                    <h2>General flow of the game</h2>
                    <video width="50%" height="400" controls>
                            <source src="resources/media/488project.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div>
                <h4 className="project_duration">
                    June - July 2022
                </h4>
            </div>
            <div className="project_info">
                <h1>MATLAB Based Circuit Simulator</h1>
                <img className="matlab_logo_svg" src="resources/img/matlab_logo.svg" alt="MATLAB logo"/>
                <img className="cir_sim_app_img"
                     src="resources/img/circuit_sim.PNG" alt="Circuit Sim App"/>
                <div className="project_desp">
                    <p>
                        Motivated by the growing educational needs of an intuitive circuit simulation tool
                        capable of performing analysis on analog circuits, a MATLAB-based circuit
                        simulation tool is targeted as the goal of this design project. The project is
                        divided into three different parts, enhancement and testing of simulator core code
                        (designed by Prof. Roni Khazaka), design and implementation of the simulator
                        graphical user interface (GUI), and implementation of the interaction between the
                        core code and the GUI.
                    </p>
                </div>
                <h3> An Example of Linear RLC AC Analysis </h3>
                <img className="linear_rlc_ac_ana" src="resources/img/test_cir.PNG"
                     alt="Linear RLC AC Analysis"/>
                <div className="project_desp">
                    <p>
                        AC, DC, and sweeping analysis on resistive, RC, RLC, and non-linear analog circuits
                        is developed and packaged using MATLAB code in MATLAB and App Designer environment.
                    </p>
                </div>
                <h3>Result from our GUI</h3>
                <img className="linear_rlc_ac_ana_res" src="resources/img/mat_cir.PNG"
                     alt="Linear RLC AC Analysis Result"/>
                <h3>Result from the LTSpice</h3>
                <img className="linear_rlc_ac_ana_res_lt" src="resources/img/cir_LT.PNG"
                     alt="Linear RLC AC Analysis LTSpice Result"/>
                <h3> Different segment of our GUI </h3>
                <img className="cir_sim_app_img" src="resources/img/seg1_cir.PNG"
                     alt="Smiley face"/>
                <img className="cir_sim_app_img" src="resources/img/seg2_cir.PNG"
                     alt="Smiley face"/>
                <h4 className="project_duration">
                    SEP. 2017 - MAY. 2018
                </h4>
            </div>
            <div className="project_info">
                <h1>IoT - Sensor Data Management from Hardware to Cloud</h1>
                <img className="st_logo_svg" src="resources/img/st_logo.svg" alt="STM logo"/>
                <img className="micro_pro_img" src="resources/img/Micp.JPG" alt="STM32 Image"/>
                <div className="project_desp">
                    <p>
                        The system aims to send recorded audio data from the programming board
                        over the BLE (Bluetooth Low Energy) connection to the smartphone device.
                        This data will be saved as a file in the smartphone and uploaded to cloud device.
                    </p>
                </div>
                <h3>
                    <a className="project_desp_a"
                       title="Project Report"
                       href="resources/pdf/Microp_Final_Report_G04.pdf"
                       target="_blank" rel="noopener noreferrer">
                           If you are interested, download the report here.
                    </a>
                </h3>
                <div className="project_desp">
                    <p>
                        I was in charge with reading the audio data (reading on ship microphone), applying
                        processing if needed, transmiting data serially to the Nucleo board, and
                        interconnecting the STM Discovery board with smartphone.
                    </p>
                </div>
                <h4 className="project_duration">
                    NOV. - DEC. 2017
                </h4>
            </div>
        </div>
    )
}