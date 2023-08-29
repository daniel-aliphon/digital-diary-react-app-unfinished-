import { useEffect, useState } from "react";
import toastr from "toastr";
import Compose from "./Compose";
import "./Template.css";

const Template = () => {
  //
  const notify = () => {
    toastr.success("", "Copied to clipboard!", {
      closeButton: false,
      progressBar: false,
      timeOut: 700,
      positionClass: "toast-top-center",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    });
    navigator.clipboard.writeText("http://localhost:5173/");
  };
  //
  const light = "-light";
  const dark = "-dark";
  const [theme, setTheme] = useState(light);
  const [themeButton, setThemeButton] = useState("Dark Mode");

  useEffect(() => {
    theme === light
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "rgb(90, 90, 90)");
  }, [theme]);

  const alert = (
    <div className={" p-4 rounded-lg alert" + theme}>
      <p className="text-right">
        <button onClick={() => setAlertState(false)}>
          <span className={" my-0 py-0 pl-3 closebtn" + theme}>&times;</span>
        </button>
      </p>
      <p className=" text-center">
        Copy this link and share this site with your friends!
      </p>
      <p className="pl-4 text-center bg-white text-black m-4 p-2 rounded-lg">
        <button
          className="pr-5"
          onClick={notify}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-back"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
          </svg>
        </button>
        http://localhost:5173/
      </p>
    </div>
  );

  const [composeState, setComposeState] = useState(false);
  const [alertState, setAlertState] = useState(false);
  return (
    <>
      {composeState === true && <Compose />}
      {alertState === true ? alert : null}
      <div className={"header" + theme}>
        <h1 className={" font-serif title" + theme}>Digital Diary</h1>
        <div className="btns">
          <button
            onClick={() => {
              setTheme(theme === light ? dark : light);
              setThemeButton(theme === light ? "Light Mode" : "Dark Mode");
            }}
            className={"btn mode" + theme}
          >
            {themeButton}
          </button>
          <button
            onClick={() => setComposeState(true)}
            className={"btn compose" + theme}
          >
            Compose
          </button>
          <button className={"btn entries" + theme}>Entries</button>
          <button
            onClick={() => setAlertState(true)}
            className={"btn share" + theme}
          >
            Share
          </button>
        </div>

        <h2 className="text-lg pt-4">More features coming soon...</h2>
        <div className="asd">
          <p className=" text-lg block text-center">Ts & Cs Apply</p>
          <p className=" text-lg block text-center">© 2023 Company, Inc</p>
        </div>
      </div>
    </>
  );
};

export default Template;
