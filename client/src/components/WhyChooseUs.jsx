function WhyChooseUs() {
  const features = [
    {
      icon: "🏡",
      title: "Verified Properties",
      description:
        "Every property is carefully verified to ensure quality and trust.",
    },
    {
      icon: "🔒",
      title: "Secure Booking",
      description:
        "Book your stay safely with our secure booking system.",
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description:
        "Affordable pricing with no hidden charges.",
    },
    {
      icon: "⭐",
      title: "24/7 Customer Support",
      description:
        "Our support team is available whenever you need assistance.",
    },
  ];

  return (
    <section
      style={{
        background: "#0b1320",
        padding: "80px 40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        Why Choose Us
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "60px",
          fontSize: "18px",
        }}
      >
        Everything you need for a comfortable and memorable stay.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,.05)",
              borderRadius: "20px",
              padding: "35px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,.08)",
              backdropFilter: "blur(10px)",
              transition: "0.3s",
              boxShadow: "0 10px 30px rgba(0,0,0,.2)",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "white",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "28px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;