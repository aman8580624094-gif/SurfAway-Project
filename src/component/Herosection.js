const HeroSection = () => {
  return (
    <div>
    <div
      style={{
        textAlign:"center",
        backgroundImage:
          "url('https://hdqwalls.com/wallpapers/sea-sunset-beach-sunlight-long-exposure-4k-ku.jpg')",
        backgroundepeat: "no-repeat",
        objectFit: "cover",
        backgroundSize: "cover",
        width: " 100%",
        height: "620px",
        backgroundPosition: "center",
      }}
    >
      <h1
        style={{
          fontSize: "78px",
          fontFamily: "sans-serif",
          marginBottom: "0",
          marginTop: "0",
          color: "#fff",
          paddingTop: "80px",
          paddingBottom: "11px",
        }}
      >
        It's All About
        <br />
        The Lifestyle
      </h1>
      <p style={{ color: "#fff", paddingBottom: "5px", fontSize: "18px" }}>
        SurfAway is a global platform connecting surfers and travelers with
        volunteer <br />
        opportunities at surf camps, hostels, and ocean-minded communities.
      </p>
      <p
        style={{
          color: "#fff",
          paddingBottom: "5px",
          marginTop: "-2px",
          fontSize: "17px",
        }}
      >
        Travel the world at low cost, surf amazing waves, and meet like-minded
        people
        <br /> while giving back to the ocean and communities.
      </p>
      <button
        style={{
          marginTop: "16px",
          padding: "16px 22px",
          fontWeight: "700",
          fontSize: "15px",
          color: "#fff",
          borderRadius: " 40px",
          backgroundColor: "#226845",
          border: "none",
        }}
      >
        Join Surfaway
      </button>
    </div>
    </div>
  );
};

export default HeroSection;