import { useState, useEffect } from "react";

const ContactHero = () => {
  const [value, setValue] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  // console.log(value)
  const effectFn = () => {
    console.log("clicked");
  };

  const fn = () => {
    document.addEventListener("click", effectFn);
    return () => {
      document.removeEventListener("click", effectFn);
    };
  };
  // const fn = () =>{
  //   // on mounting
  //   console.log("After render")
  //   // on unmounting
  //   return () => {
  //     console.log("After unmounting")
  //   }
  // }

  // run depending on value change on render
  // useEffect(fn, [value, valueTwo])

  // run one time
  // useEffect(fn,[])

  // run everytime time on render
  useEffect(fn);

  return (
    <div
      style={{
        textAlign:"center",
        backgroundImage:
          "https://tse1.mm.bing.net/th/id/OIP.9hhJPYgd1Cj6l3qxtzxLYQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      }}
    >
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <input
        value={valueTwo}
        onChange={(e) => {
          setValueTwo(e.target.value);
        }}
      ></input>
      <div>
        <h1>How it works </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br />
          standard dummy text ever since the 1500s,
        </p>
      </div>
    </div>
  );
};
export default ContactHero;
