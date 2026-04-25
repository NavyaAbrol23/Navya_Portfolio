export default function Footer() {
  return (
    <footer style={{
      padding:        "2rem 3rem",
      borderTop:      "1px solid var(--border)",
      display:        "flex",
      justifyContent: "space-between",
      alignItems:     "center",
      background:     "var(--bg)",
    }}>
      <span style={{
        fontFamily:    "var(--font-mono)",
        fontSize:      "0.56rem",
        color:         "var(--text-muted)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}>
        © Navya Abrol
      </span>
      <span style={{
        fontFamily:    "var(--font-mono)",
        fontSize:      "0.56rem",
        color:         "var(--text-muted)",
        letterSpacing: "0.1em",
      }}>
        Mechatronics Engineering · TIET
      </span>
    </footer>
  );
}
