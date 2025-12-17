const work = [
  {
    img: "https://th.bing.com/th/id/OIP.yOT-3MR7IxZQVCuZWCZLPgHaE8?w=310&h=180&c=7&r=0&o=7&cb=ucfimgc2&pid=1.7&rm=3",
    profile: "Create Your Profile",
    detail:
      "Tell us who you are, your skills &   what you love. Surf? Yo  ga? S oci al media? We got you.",
  },
  {
    img: "https://images.nationalgeographic.org/image/upload/v1638889927/EducationHub/photos/pebble-beach.jpg",
    profile: "Discover Surf Hosts",
    detail:
      "Explore amazing surf towns, beach hostels & ca mps looking elp. Filter by skills, surf level & vibe",
  },
  {
    img: "https://www.tripsavvy.com/thmb/j-kJDJ57fZLsirMJHYD7Vfrywtk=/4857x3242/filters:no_upscale():max_bytes(150000):strip_icc()/mirissa-beach-sri-lanka-5add95baeb97de0037ead086.jpg",
    profile: "Match & Go!",
    detail:
      "Message hosts, set up your trip, pack your board & help out. Your next surf adventure starts here.",
  },
];

const Working = () => {
  return (
    <div style={{ textAlign:"center", paddingTop: "62px", paddingBottom: "80px" }}>
      <h1
        style={{
          fontSize: "65px",
          paddingBottom: "20px",
          fontFamily: "cursive",
        }}
      >
        How It Works
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0% 7%",
          gap: "21px",
        }}
      >
        {work.map((items) => (
          <div>
            <img
              src={items.img}
              style={{
                width: "94%",
                objectFit: "cover",
                height: "392px",
                borderRadius: "66px",
              }}
            ></img>
            <div>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  fontFamily: "cursive",
                  paddingTop: "12px",
                  marginBottom: "16px",
                  color: "#004a89",
                }}
              >
                {items.profile}
              </h1>
              <p
                style={{
                  fontSize: "17px",
                  color: "#282b2c",
                  fontWeight: "400",
                  padding: "0px 0px",
                }}
              >
                {items.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: "50px",
          padding: " 13px 18px 13px 18px",
          borderRadius: " 27px",
          fontSize: "15px",
          fontWeight: "600",
          border: "1px solid #171717",
          color: "#435ab0",
        }}
      >
        Become a Volunteer
      </button>
    </div>
  );
};
export default Working;
