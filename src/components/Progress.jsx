function Progress() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 justify-center ">
      <p className=" para-progress">
        HTML
        <progress className="progress-bar" value="90" max="100"></progress>
      </p>
      <p className="para-progress ">
        CSS3 <progress className="progress-bar" value="70" max="100"></progress>
      </p>
      <p className=" para-progress ">
        Sass<progress className="progress-bar" value="60" max="100"></progress>
      </p>
      <p className=" para-progress ">
        TailwindCSS<progress className="progress-bar" value="70" max="100"></progress>
      </p>
      <p className=" para-progress ">
        Bootstrap<progress className="progress-bar" value="60" max="100"></progress>
      </p>
      <p className=" para-progress ">
        Javascript <progress className="progress-bar" value="60" max="100"></progress>
      </p>

      <p className=" para-progress ">
        ReactJs<progress className="progress-bar" value="20" max="100"></progress>
      </p>

      <p className=" para-progress ">
        Rest-api <progress className="progress-bar" value="70" max="100"></progress>
      </p>
      <p className=" para-progress ">
        Wordpress<progress className="progress-bar" value="50" max="100"></progress>
      </p>
      <p className=" para-progress ">
        AdobeXD<progress className="progress-bar" value="60" max="100"></progress>
      </p>
    </div>
  );
}

export default Progress;
