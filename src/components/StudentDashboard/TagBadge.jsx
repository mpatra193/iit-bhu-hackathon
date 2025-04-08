export default function TagBadge() {
  return (
    <div className="flex item-start gap-[16px] w-full h-6">
      <div style={{
        display: "flex",
        padding: "8px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        background: "linear-gradient(90deg, #FDDCF9 0%, #C3E8FC 100%)"
      }}>Cloud</div>
      <div style={{
        display: "flex",
        padding: "8px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "8px",
        background: "#FCE1C8"
      }}>intermediate</div>
    </div>
  )
}

