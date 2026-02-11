// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useApi } from "../utils/Api";
// import "./OrderTracking.css";
// // import foodImage from "../assets/gallery3.avif";

// export default function OrderTracking() {
//   const { apiFetch } = useApi();

//   const [status, setStatus] = useState("to do");
//   const [orderNumber, setOrderNumber] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [searchParams] = useSearchParams();
//   const encryptedId = searchParams.get("id");

//   // -------------------------
//   // Fetch order status
//   // -------------------------
//   useEffect(() => {
//     if (!encryptedId) {
//       setError("Missing order ID in URL");
//       setLoading(false);
//       return;
//     }

//     async function fetchStatus() {
//       try {
//         const data = await apiFetch("order-status", {
//           encrypted_order_id: encryptedId,
//         });

//         if (!data.success || !data.order) {
//           setError(data.message || "Invalid order");
//           setLoading(false);
//           return;
//         }

//         const order = data.order;

//         setStatus(order.status);
//         setOrderNumber(order.order_number);
//         setLoading(false);
//         setError(null);
//       } catch (err) {
//         console.error("Failed to fetch order:", err);
//         setError("Network or server error");
//         setLoading(false);
//       }
//     }

//     fetchStatus();

//     // Poll every 10 seconds
//     const interval = setInterval(fetchStatus, 10000);
//     return () => clearInterval(interval);
//   }, [encryptedId, apiFetch]);

//   // -------------------------
//   // Status mapping
//   // -------------------------
//   const steps = [
//     {
//       key: "to do",
//       label: "Order Received",
//       subtext: "Your order is in queue",
//     },
//     {
//       key: "in progress",
//       label: "Being Prepared",
//       subtext: "Your order is being prepared.",
//     },
//     {
//       key: "completed",
//       label: "Order Ready",
//       subtext: "Your order is ready for collection.",
//     },
//   ];

//   const stepOrder = { "to do": 0, "in progress": 1, completed: 2 };
//   const currentStep = stepOrder[status] ?? 0;

//   const progressMap = {
//     "to do": "20%",
//     "in progress": "60%",
//     completed: "100%",
//   };

//   // -------------------------
//   // Loading & error UI
//   // -------------------------
//   if (loading)
//     return (
//       <div className="tracking-page">
//         <div
//           style={{
//             flex: 1,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           Loading order status...
//         </div>
//       </div>
//     );

//   if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

//   return (
//     <div className="tracking-page">
//       {/* Header */}
//       <header className="tracking-header">
//         <h1>{steps[currentStep].label}</h1>
//         <p className="status-subtext">{steps[currentStep].subtext}</p>
//       </header>

//       {/* Progress bar */}
//       <div className="progress-bar-container">
//         <div className="progress-bar">
//           <div
//             className="progress-fill"
//             style={{ width: progressMap[status] }}
//           ></div>
//         </div>
//       </div>


//       {/* Order ID */}
//       <p className="package-id">
//         Order <span>#{orderNumber}</span>
//       </p>

//       {/* Status steps */}
//       <div className="status-card">
//         {steps.map((step, index) => (
//           <div
//             key={step.key}
//             className={`status-step ${index <= currentStep ? "active" : ""}`}
//           >
//             <span className="dot" />
//             <div>
//               <p>{step.label}</p>
//               <small className="status-step-subtext">{step.subtext}</small>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Ready banner */}
//       {status === "completed" && (
//         <div className="ready-banner">Your order is ready.</div>
//       )}

//       {/* Food image */}
//       <div className="order-image-card">
//         <img src={foodImage} alt="Order" />
//       </div>
//     </div>
//   );
// }
