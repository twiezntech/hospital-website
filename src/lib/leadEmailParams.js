export function leadEmailParams({
  name,
  mobile,
  email,
  timeSlot,
  message,
  city,
  area,
  page,
}) {
  return {
    patient_name: String(name || "").trim() || "Not provided",
    mobile: String(mobile || "").trim() || "Not provided",
    email: String(email || "").trim() || "Not provided",
    preferred_time: String(timeSlot || "").trim() || "Not specified",
    message: String(message || "").trim() || "No message",
    city: city || "Not specified",
    area: area || "Not specified",
    page: page || "Website",
    time: new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };
}
