export default function Projects(props) {
    return React.createElement(
        "div",
        { className: props.requiredProjectsClassName, onAnimationEnd: props.projectsAnimationEnded },
        React.createElement(
            "div",
            { className: "project_info" },
            React.createElement(
                "a",
                { className: "view_github", href: "https://github.com/MingruiZhangW",
                    target: "_blank", rel: "noopener noreferrer",
                    title: "Ming's GitHub" },
                React.createElement("i", { className: "fa fa-github" })
            )
        ),
        React.createElement(
            "div",
            { className: "project_info" },
            React.createElement(
                "h1",
                null,
                "A Simple DFO Like Game"
            ),
            React.createElement("img", { className: "dfo_like_game_main_page",
                src: "resources/img/main_page.png", alt: "Main Page" }),
            React.createElement(
                "div",
                { className: "project_desp" },
                React.createElement(
                    "p",
                    null,
                    "Dungeon Fighter Online (DFO), known in China as Dungeon & Fighter (DNF), is a multiplayer beat-\u2019em-up action role-playing game (Dungeon fighter online 2022). In general, the players in this game could traverse 2d screens while fighting hordes of monsters with their unique skills. A basic demonstration of the gameplay can be found ",
                    React.createElement(
                        "a",
                        { className: "normal_web_link",
                            title: "\u3010Citris\u3011\u5929\u5E37\u5DE8\u517D\u7BC7",
                            href: "https://www.bilibili.com/video/BV1dF411p73R?share_source=copy_web&vd_source=36c43cc5514d74d7b9d83cae3b5b10e1",
                            target: "_blank", rel: "noopener noreferrer" },
                        "here"
                    ),
                    ", and a more advanced gameplay with more can be found ",
                    React.createElement(
                        "a",
                        { className: "normal_web_link",
                            title: "\u3010\u9984\u9968\u54E5\u5251\u9B42\u5E38\u89C4MP\u5237\u56FE\u88C5\u7EFF\u6C99\u888B1390\u4EBF\uFF01\u3011",
                            href: "https://www.bilibili.com/video/BV1a34y1W7TC?share_source=copy_web&vd_source=36c43cc5514d74d7b9d83cae3b5b10e1",
                            target: "_blank", rel: "noopener noreferrer" },
                        "here"
                    ),
                    "."
                ),
                React.createElement(
                    "p",
                    null,
                    "For this project, the goal is to create a simplified DFO-like 2d game by using pure OpenGL. The game will contain one main character for the player to use, one type of monster, and one NPC. A small story, a basic game flow, and some BGMs in general will provide the player with a relatively complete experience. Some UI elements, including dialog boxes, buttons, etc., are also presented throughout the game."
                )
            ),
            React.createElement(
                "div",
                { className: "intern_video" },
                React.createElement(
                    "h2",
                    null,
                    "General flow of the game"
                ),
                React.createElement(
                    "video",
                    { width: "50%", height: "400", controls: true },
                    React.createElement("source", { src: "resources/media/488project.mp4", type: "video/mp4" }),
                    "Your browser does not support the video tag."
                )
            ),
            React.createElement(
                "h4",
                { className: "project_duration" },
                "June - July 2022"
            )
        ),
        React.createElement(
            "div",
            { className: "project_info" },
            React.createElement(
                "h1",
                null,
                "MATLAB Based Circuit Simulator"
            ),
            React.createElement("img", { className: "matlab_logo_svg", src: "resources/img/matlab_logo.svg", alt: "MATLAB logo" }),
            React.createElement("img", { className: "cir_sim_app_img",
                src: "resources/img/circuit_sim.PNG", alt: "Circuit Sim App" }),
            React.createElement(
                "div",
                { className: "project_desp" },
                React.createElement(
                    "p",
                    null,
                    "Motivated by the growing educational needs of an intuitive circuit simulation tool capable of performing analysis on analog circuits, a MATLAB-based circuit simulation tool is targeted as the goal of this design project. The project is divided into three different parts, enhancement and testing of simulator core code (designed by Prof. Roni Khazaka), design and implementation of the simulator graphical user interface (GUI), and implementation of the interaction between the core code and the GUI."
                )
            ),
            React.createElement(
                "h3",
                null,
                " An Example of Linear RLC AC Analysis "
            ),
            React.createElement("img", { className: "linear_rlc_ac_ana", src: "resources/img/test_cir.PNG",
                alt: "Linear RLC AC Analysis" }),
            React.createElement(
                "div",
                { className: "project_desp" },
                React.createElement(
                    "p",
                    null,
                    "AC, DC, and sweeping analysis on resistive, RC, RLC, and non-linear analog circuits is developed and packaged using MATLAB code in MATLAB and App Designer environment."
                )
            ),
            React.createElement(
                "h3",
                null,
                "Result from our GUI"
            ),
            React.createElement("img", { className: "linear_rlc_ac_ana_res", src: "resources/img/mat_cir.PNG",
                alt: "Linear RLC AC Analysis Result" }),
            React.createElement(
                "h3",
                null,
                "Result from the LTSpice"
            ),
            React.createElement("img", { className: "linear_rlc_ac_ana_res_lt", src: "resources/img/cir_LT.PNG",
                alt: "Linear RLC AC Analysis LTSpice Result" }),
            React.createElement(
                "h3",
                null,
                " Different segment of our GUI "
            ),
            React.createElement("img", { className: "cir_sim_app_img", src: "resources/img/seg1_cir.PNG",
                alt: "Smiley face" }),
            React.createElement("img", { className: "cir_sim_app_img", src: "resources/img/seg2_cir.PNG",
                alt: "Smiley face" }),
            React.createElement(
                "h4",
                { className: "project_duration" },
                "SEP. 2017 - MAY. 2018"
            )
        ),
        React.createElement(
            "div",
            { className: "project_info" },
            React.createElement(
                "h1",
                null,
                "IoT - Sensor Data Management from Hardware to Cloud"
            ),
            React.createElement("img", { className: "st_logo_svg", src: "resources/img/st_logo.svg", alt: "STM logo" }),
            React.createElement("img", { className: "micro_pro_img", src: "resources/img/Micp.JPG", alt: "STM32 Image" }),
            React.createElement(
                "div",
                { className: "project_desp" },
                React.createElement(
                    "p",
                    null,
                    "The system aims to send recorded audio data from the programming board over the BLE (Bluetooth Low Energy) connection to the smartphone device. This data will be saved as a file in the smartphone and uploaded to cloud device."
                )
            ),
            React.createElement(
                "h3",
                null,
                React.createElement(
                    "a",
                    { className: "project_desp_a",
                        title: "Project Report",
                        href: "resources/pdf/Microp_Final_Report_G04.pdf",
                        target: "_blank", rel: "noopener noreferrer" },
                    "If you are interested, download the report here."
                )
            ),
            React.createElement(
                "div",
                { className: "project_desp" },
                React.createElement(
                    "p",
                    null,
                    "I was in charge with reading the audio data (reading on ship microphone), applying processing if needed, transmiting data serially to the Nucleo board, and interconnecting the STM Discovery board with smartphone."
                )
            ),
            React.createElement(
                "h4",
                { className: "project_duration" },
                "NOV. - DEC. 2017"
            )
        )
    );
}