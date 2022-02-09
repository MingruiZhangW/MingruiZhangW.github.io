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