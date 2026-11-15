
const variantData = {
  Base: {
    name: "Base Range",
    variants: [
      ["Smart", "Petrol", "Manual"],
      ["Smart", "CNG", "Manual"],
      ["Smart+", "Petrol", "Manual"],
      ["Smart+", "Petrol", "AMT"],
      ["Smart+", "Diesel", "Manual"],
      ["Smart+", "CNG", "Manual"]
    ]
  },
  Mid: {
    name: "Mid Range",
    variants: [
      ["Pure+", "Petrol", "Manual"],
      ["Pure+", "Petrol", "AMT"],
      ["Pure+", "Diesel", "Manual"],
      ["Pure+ S", "Petrol", "Manual"],
      ["Pure+ S", "CNG", "Manual"],
      ["Pure+ PS", "Petrol", "Manual"]
    ]
  },
  Top: {
    name: "Top Range",
    variants: [
      ["Creative", "Petrol", "Manual"],
      ["Creative", "Diesel", "Manual"],
      ["Creative+", "Petrol", "Manual"],
      ["Creative+ S", "Petrol", "AMT"],
      ["Creative+ PS", "Petrol", "Manual"],
      ["Fearless+ PS", "Petrol", "Manual"]
    ]
  }
};

// ==========================================
// ENGINE DATA - DEMONSTRATION REFERENCE
// ==========================================

const engineData = {
  Petrol: {
    capacity: "1199 cc",
    power: "120 PS",
    torque: "170 Nm",
    description: "Turbocharged petrol engine"
  },
  Diesel: {
    capacity: "1497 cc",
    power: "115 PS",
    torque: "260 Nm",
    description: "Turbocharged diesel engine"
  },
  CNG: {
    capacity: "1199 cc",
    power: "100 PS (CNG mode)",
    torque: "170 Nm (Petrol mode)",
    description: "Petrol-CNG bi-fuel option"
  }
};

// ==========================================
// FEATURE DATA - DEMONSTRATION HIGHLIGHTS
// ==========================================

const featureData = {
  Smart: [
    "LED lighting design",
    "Safety and protection features",
    "Rear parking assistance",
    "Everyday cabin convenience"
  ],
  "Smart+": [
    "Touchscreen infotainment experience",
    "Smartphone connectivity",
    "Power window convenience",
    "Remote locking convenience"
  ],
  "Pure+": [
    "Infotainment and connectivity",
    "Parking assistance",
    "Driver comfort features",
    "Digital display experience"
  ],
  "Pure+ S": [
    "Sunroof experience",
    "Digital display features",
    "Connected technology",
    "Everyday cabin comfort"
  ],
  "Pure+ PS": [
    "Panoramic sunroof experience",
    "Infotainment and connectivity",
    "Parking assistance",
    "Cabin comfort features"
  ],
  Creative: [
    "Enhanced infotainment experience",
    "Alloy wheel styling",
    "Automatic climate comfort",
    "Premium cabin touches"
  ],
  "Creative+": [
    "Enhanced comfort experience",
    "Premium infotainment",
    "Connected vehicle technology",
    "Convenience features"
  ],
  "Creative+ S": [
    "Sunroof experience",
    "Premium infotainment",
    "Enhanced cabin convenience",
    "Distinctive exterior styling"
  ],
  "Creative+ PS": [
    "Panoramic sunroof experience",
    "Premium cabin features",
    "Enhanced technology experience",
    "Convenience features"
  ],
  "Fearless+ PS": [
    "Premium interior experience",
    "Panoramic sunroof experience",
    "Advanced technology",
    "Enhanced comfort and convenience"
  ]
};

const variantDescriptions = {
  Smart: "A practical starting point in the Nexon range.",
  "Smart+": "An entry-level choice with additional convenience highlights.",
  "Pure+": "A balanced choice focused on everyday comfort.",
  "Pure+ S": "A comfort-focused choice with a sunroof-themed highlight.",
  "Pure+ PS": "A demonstration of a more premium panoramic-roof experience.",
  Creative: "A style-focused choice with premium design highlights.",
  "Creative+": "A step up with added comfort and technology highlights.",
  "Creative+ S": "A premium-style choice with a sunroof highlight.",
  "Creative+ PS": "A premium demonstration configuration with panoramic-roof highlights.",
  "Fearless+ PS": "A top-range demonstration configuration."
};

let currentGroup = "Base";

// ==========================================
// PRICING DATA - PUNE DEMO
// ==========================================

const punePricing = {
  city: "Pune",
  lastUpdated: "15 November 2026",
  currency: "INR",
  reference: {
    variant: "Smart Petrol Manual",
    exShowroom: 736990,
    rto: 81068,
    insurance: 39878,
    onRoad: 883536,
    source: "Times of India Auto - Pune price listing"
  }
};

function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

// ==========================================
// SHARED DEMO STYLES
// ==========================================

(function addTrisulDetailStyles() {
  if (document.getElementById("trisul-stage-two-style")) return;

  const style = document.createElement("style");
  style.id = "trisul-stage-two-style";

  style.textContent = `
    .trisul-detail-intro {
      color:#aaa;
      font-size:14px;
      line-height:1.7;
      margin:10px 0 22px;
    }

    .trisul-demo-tag {
      display:inline-block;
      padding:6px 10px;
      margin:8px 0 15px;
      color:#e5c45e;
      background:rgba(214,181,74,.10);
      border:1px solid rgba(214,181,74,.35);
      border-radius:30px;
      font-size:10px;
      letter-spacing:1.5px;
      font-weight:bold;
    }

    .trisul-spec-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:12px;
      margin:18px 0 25px;
    }

    .trisul-spec-box {
      padding:16px 10px;
      text-align:center;
      background:#202020;
      border:1px solid #393939;
      border-radius:10px;
    }

    .trisul-spec-box span {
      display:block;
      color:#aaa;
      font-size:11px;
      margin-bottom:8px;
    }

    .trisul-spec-box strong {
      display:block;
      color:#e5c45e;
      font-size:17px;
    }

    .trisul-feature-grid {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:10px;
      margin:15px 0 22px;
    }

    .trisul-feature-item {
      padding:13px;
      color:#eee;
      background:#202020;
      border:1px solid #383838;
      border-radius:9px;
      font-size:13px;
      line-height:1.5;
    }

    .trisul-feature-item::before {
      content:"✓";
      color:#d6b54a;
      font-weight:bold;
      margin-right:8px;
    }

    .trisul-variant-description {
      padding:15px;
      margin:15px 0;
      color:#ddd;
      background:rgba(214,181,74,.07);
      border-left:3px solid #d6b54a;
      border-radius:5px;
      font-size:13px;
      line-height:1.6;
    }

    .trisul-demo-disclaimer {
      color:#999;
      font-size:11px;
      line-height:1.7;
      padding:12px;
      margin-top:18px;
      background:rgba(255,255,255,.035);
      border-radius:8px;
    }

    @media(max-width:600px) {
      .trisul-spec-grid,
      .trisul-feature-grid {
        grid-template-columns:1fr;
      }

      .trisul-spec-box {
        display:flex;
        align-items:center;
        justify-content:space-between;
        text-align:left;
        padding:13px;
      }

      .trisul-spec-box span {
        margin:0;
      }
    }
  `;

  document.head.appendChild(style);
})();

// ==========================================
// STAGE 3 - PUNE PRICE DISPLAY
// ==========================================

function showPunePricing(variantName, fuel, transmission) {
  const existing = document.getElementById("trisul-pricing");
  if (existing) existing.remove();

  const section = document.createElement("section");
  section.id = "trisul-pricing";

  const isReferenceVariant =
    variantName === "Smart" &&
    fuel === "Petrol" &&
    transmission === "Manual";

  const price = punePricing.reference;

  section.innerHTML = `
    <div class="pricing-inner">
      <p class="pricing-label">TRISUL PRICE INTELLIGENCE</p>
      <h2>Pune Price Estimate</h2>
      <p class="pricing-subtitle">
        ${variantName} · ${fuel} · ${transmission}
      </p>

      ${
        isReferenceVariant
          ? `
            <div class="price-status">
              DEMONSTRATION PRICE REFERENCE
            </div>

            <div class="price-card">
              <p>EX-SHOWROOM PRICE</p>
              <h3>${formatPrice(price.exShowroom)}</h3>
            </div>

            <div class="price-breakdown">
              <h3>Price Breakdown</h3>

              <div class="price-row">
                <span>Ex-showroom Price</span>
                <strong>${formatPrice(price.exShowroom)}</strong>
              </div>

              <div class="price-row">
                <span>Estimated RTO</span>
                <strong>${formatPrice(price.rto)}</strong>
              </div>

              <div class="price-row">
                <span>Estimated Insurance</span>
                <strong>${formatPrice(price.insurance)}</strong>
              </div>

              <div class="price-total">
                <span>Estimated On-Road Price</span>
                <h2>${formatPrice(price.onRoad)}</h2>
              </div>
            </div>

            <p class="price-calculation-note">
              Total calculated from the displayed ex-showroom,
              RTO and insurance reference amounts.
            </p>
          `
          : `
            <div class="price-card">
              <p>PRICE STATUS</p>
              <h3>Price not available yet</h3>
              <p>
                The Pune price for this exact variant has not
                been entered into this demonstration.
              </p>
            </div>

            <div class="price-verification">
              <strong>Dealer verification required</strong>
              <p>
                Contact an authorised Tata Motors dealership
                in Pune for the latest price quotation.
              </p>
            </div>
          `
      }

      <div class="pricing-update">
        <span>LOCATION</span>
        <strong>Pune, Maharashtra</strong>
        <span>LAST UPDATED</span>
        <strong>${punePricing.lastUpdated}</strong>
      </div>

      <p class="pricing-note">
        TRISUL demonstration estimate only. These figures are
        not an official Tata Motors quotation. Actual prices,
        taxes, insurance, offers and other charges may change.
        Confirm the final amount with an authorised dealership.
      </p>
    </div>
  `;

  if (!document.getElementById("trisul-pricing-style")) {
    const style = document.createElement("style");
    style.id = "trisul-pricing-style";

    style.textContent = `
      #trisul-pricing {
        margin:35px 0;
        padding:35px 22px;
        background:rgba(15,15,15,.94);
        border:1px solid rgba(210,180,120,.35);
        border-radius:16px;
        color:#fff;
      }

      .pricing-inner {
        max-width:700px;
        margin:auto;
      }

      .pricing-label {
        color:#c9a96e;
        letter-spacing:3px;
        font-size:11px;
      }

      .pricing-inner h2 {
        color:#d6b779;
      }

      .pricing-subtitle {
        color:#aaa;
        font-size:13px;
      }

      .price-status {
        display:inline-block;
        margin:18px 0 5px;
        padding:8px 12px;
        color:#d6b779;
        background:rgba(214,183,121,.10);
        border:1px solid rgba(214,183,121,.35);
        border-radius:20px;
        font-size:10px;
        letter-spacing:1px;
        font-weight:bold;
      }

      .price-card {
        margin:22px 0;
        padding:22px;
        background:#202020;
        border:1px solid #383838;
        border-radius:12px;
      }

      .price-card p {
        color:#aaa;
        font-size:12px;
      }

      .price-card h3 {
        color:#d6b779;
        font-size:28px;
        margin:10px 0;
      }

      .price-breakdown {
        margin-top:25px;
        padding:20px;
        background:#191919;
        border:1px solid #383838;
        border-radius:12px;
      }

      .price-breakdown h3 {
        color:#d6b779;
        font-size:17px;
        margin:0 0 12px;
      }

      .price-row {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:12px;
        padding:15px 0;
        border-bottom:1px solid #383838;
        font-size:13px;
      }

      .price-row span { color:#bbb; }
      .price-row strong { color:#fff; text-align:right; }

      .price-total {
        margin-top:20px;
        padding:18px;
        background:rgba(214,183,121,.09);
        border:1px solid rgba(214,183,121,.35);
        border-radius:10px;
      }

      .price-total span {
        color:#bbb;
        font-size:12px;
      }

      .price-total h2 {
        color:#e5c779;
        font-size:29px;
        margin:8px 0 0;
      }

      .price-calculation-note {
        color:#999;
        font-size:11px;
        line-height:1.6;
      }

      .price-verification {
        padding:18px;
        margin-top:18px;
        background:#202020;
        border:1px solid #444;
        border-radius:10px;
      }

      .price-verification strong { color:#e5c779; }

      .price-verification p {
        color:#aaa;
        font-size:13px;
        line-height:1.6;
      }

      .pricing-update {
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:10px;
        margin-top:25px;
        padding:18px;
        background:#202020;
        border-radius:10px;
      }

      .pricing-update span {
        color:#999;
        font-size:10px;
        letter-spacing:1px;
      }

      .pricing-update strong {
        color:#eee;
        font-size:13px;
      }

      .pricing-note {
        color:#999;
        font-size:11px;
        line-height:1.7;
        margin-top:20px;
      }

      @media(max-width:500px) {
        #trisul-pricing { padding:25px 14px; }
        .price-row { font-size:12px; }
        .price-total h2 { font-size:24px; }
      }
    `;

    document.head.appendChild(style);
  }

  const variantsSection = document.querySelector(".variants");

  if (variantsSection) {
    variantsSection.insertAdjacentElement("afterend", section);
  } else {
    document.querySelector(".catalogue").appendChild(section);
  }
}

// ==========================================
// COMPARISON DATA
// ==========================================

window.trisulCompareList = [];

function getVariantKey(group, index) {
  return group + "-" + index;
}

function isVariantCompared(group, index) {
  const key = getVariantKey(group, index);
  return window.trisulCompareList.some(item => item.key === key);
}

// ==========================================
// VARIANT SELECTION
// ==========================================

window.selectVariant = function(group) {
  currentGroup = group;
  const data = variantData[group];
  if (!data) return;

  const oldSection = document.getElementById("individual-variants");
  if (oldSection) oldSection.remove();

  const section = document.createElement("section");
  section.id = "individual-variants";
  section.className = "individual-variants";

  section.innerHTML = `
    <h2>${data.name}</h2>
    <p>Select an individual variant to explore its details.</p>

    <div class="individual-variant-buttons">
      ${data.variants.map((variant, index) => `
        <button type="button"
          data-variant-index="${index}"
          onclick="selectIndividualVariant(${index}, this)">
          ${variant[0]} · ${variant[1]} · ${variant[2]}
        </button>
      `).join("")}
    </div>

    <div id="selected-variant-details"></div>
  `;

  const pricing = document.getElementById("trisul-pricing");
  if (pricing) pricing.remove();

  document.querySelector(".variants")
    .insertAdjacentElement("afterend", section);

  renderComparison();

  section.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
};

// ==========================================
// INDIVIDUAL VARIANT DETAILS
// ==========================================

window.selectIndividualVariant = function(index, button) {
  const variant = variantData[currentGroup].variants[index];
  if (!variant) return;

  document.querySelectorAll(".individual-variant-buttons button")
    .forEach(btn => btn.classList.remove("selected"));

  if (button) button.classList.add("selected");

  const [name, fuel, transmission] = variant;
  const engine = engineData[fuel];
  const features = featureData[name] || ["Feature details to be added"];

  const detail = document.getElementById("selected-variant-details");
  if (!detail || !engine) return;

  const alreadyCompared = isVariantCompared(currentGroup, index);
  const description = variantDescriptions[name] || "Explore this Nexon demonstration variant.";

  detail.innerHTML = `
    <div class="selected-variant-card">

      <div style="
        width:100%;
        margin-bottom:25px;
        overflow:hidden;
        border:1px solid rgba(214,181,74,.5);
        border-radius:12px;
        background:#202020;
      ">
        <img
          src="https://cdni.autocarindia.com/ExtraImages/20220228050614_Nexon_Image_02.jpg"
          alt="Tata Nexon - ${name} variant"
          style="
            display:block;
            width:100%;
            max-height:340px;
            object-fit:contain;
          "
        >
        <p style="
          text-align:center;
          color:#d6b54a;
          font-size:11px;
          letter-spacing:2px;
          padding:10px;
          margin:0;
        ">
          TATA NEXON · ${name.toUpperCase()}
        </p>
      </div>

      <span class="trisul-demo-tag">TRISUL DEMO VARIANT</span>

      <h2>${name}</h2>
      <p class="trisul-detail-intro">${description}</p>

      <h3>Variant Configuration</h3>

      <div class="trisul-spec-grid">
        <div class="trisul-spec-box">
          <span>Fuel Type</span>
          <strong>${fuel}</strong>
        </div>
        <div class="trisul-spec-box">
          <span>Transmission</span>
          <strong>${transmission}</strong>
        </div>
        <div class="trisul-spec-box">
          <span>Engine</span>
          <strong>${engine.capacity}</strong>
        </div>
      </div>

      <h3>Engine Information</h3>
      <p class="trisul-detail-intro">${engine.description}</p>

      <div class="trisul-spec-grid">
        <div class="trisul-spec-box">
          <span>Engine Capacity</span>
          <strong>${engine.capacity}</strong>
        </div>
        <div class="trisul-spec-box">
          <span>Maximum Power</span>
          <strong>${engine.power}</strong>
        </div>
        <div class="trisul-spec-box">
          <span>Maximum Torque</span>
          <strong>${engine.torque}</strong>
        </div>
      </div>

      <h3>Key Feature Highlights</h3>
      <p class="trisul-detail-intro">
        A quick look at the features highlighted for this demonstration variant.
      </p>

      <div class="trisul-feature-grid">
        ${features.map(feature => `
          <div class="trisul-feature-item">${feature}</div>
        `).join("")}
      </div>

      <button type="button" id="compare-action"
        class="compare-action-button"
        onclick="toggleCompareVariant('${currentGroup}', ${index})">
        ${alreadyCompared ? "Remove from Compare" : "＋ Add to Compare"}
      </button>

      <p class="trisul-demo-disclaimer">
        Demonstration information only. Engine figures and feature highlights
        are sample catalogue content and are not a confirmation of equipment
        fitment for this exact variant. Verify details before public launch.
      </p>

    </div>
  `;

  showPunePricing(name, fuel, transmission);
};

// ==========================================
// ADD / REMOVE VARIANTS FROM COMPARISON
// ==========================================

window.toggleCompareVariant = function(group, index) {
  const variant = variantData[group]?.variants[index];
  if (!variant) return;

  const key = getVariantKey(group, index);
  const existingIndex = window.trisulCompareList.findIndex(item => item.key === key);

  if (existingIndex !== -1) {
    window.trisulCompareList.splice(existingIndex, 1);
  } else {
    if (window.trisulCompareList.length >= 2) {
      alert("You can compare only two variants at a time.");
      return;
    }

    window.trisulCompareList.push({
      key,
      group,
      index,
      name:variant[0],
      fuel:variant[1],
      transmission:variant[2]
    });
  }

  const compareButton = document.getElementById("compare-action");
  if (compareButton) {
    compareButton.textContent = isVariantCompared(group, index)
      ? "Remove from Compare"
      : "＋ Add to Compare";
  }

  renderComparison();
};

// ==========================================
// STAGE 4 - IMPROVED VARIANT COMPARISON
// ==========================================

function renderComparison() {
  const oldComparison = document.getElementById("trisul-comparison");
  if (oldComparison) oldComparison.remove();

  if (window.trisulCompareList.length === 0) return;

  const section = document.createElement("section");
  section.id = "trisul-comparison";

  const comparisonCards = window.trisulCompareList.map(item => {
    const engine = engineData[item.fuel];
    const features = featureData[item.name] || ["Feature details to be added"];

    const isReferencePrice =
      item.name === "Smart" &&
      item.fuel === "Petrol" &&
      item.transmission === "Manual";

    const priceText = isReferencePrice
      ? formatPrice(punePricing.reference.onRoad)
      : "Dealer verification required";

    return `
      <article class="comparison-card">

        <div class="comparison-card-top">
          <p class="comparison-range">${item.group} RANGE</p>
          <span class="comparison-demo-tag">DEMO VARIANT</span>
        </div>

        <h3>${item.name}</h3>

        <p class="comparison-configuration">
          ${item.fuel} · ${item.transmission}
        </p>

        <div class="comparison-section-heading">
          ENGINE & PERFORMANCE
        </div>

        <div class="comparison-spec">
          <span>Engine capacity</span>
          <strong>${engine.capacity}</strong>
        </div>

        <div class="comparison-spec">
          <span>Maximum power</span>
          <strong>${engine.power}</strong>
        </div>

        <div class="comparison-spec">
          <span>Maximum torque</span>
          <strong>${engine.torque}</strong>
        </div>

        <div class="comparison-section-heading">
          FEATURE HIGHLIGHTS
        </div>

        <ul class="comparison-feature-list">
          ${features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>

        <div class="comparison-price">
          <span>PUNE PRICE REFERENCE</span>
          <strong>${priceText}</strong>
          <small>
            ${isReferencePrice
              ? "Demonstration estimate"
              : "Price not entered for this variant"}
          </small>
        </div>

        <button
          type="button"
          class="comparison-remove-button"
          onclick="toggleCompareVariant('${item.group}', ${item.index})">
          Remove Variant
        </button>

      </article>
    `;
  }).join("");

  section.innerHTML = `
    <div class="comparison-inner">

      <p class="comparison-label">TRISUL SMART COMPARISON</p>

      <h2>Compare Nexon Variants</h2>

      <p class="comparison-description">
        Explore the differences between your selected variants
        before making a decision.
      </p>

      <div class="comparison-grid">
        ${comparisonCards}
      </div>

      <div class="comparison-hint">
        ${window.trisulCompareList.length === 1
          ? "Select one more variant to complete your comparison."
          : "Your two selected variants are ready to compare."}
      </div>

      <p class="trisul-demo-disclaimer">
        Specifications and feature highlights are demonstration
        references. Exact variant equipment and prices must be
        verified with Tata Motors before public release.
      </p>

    </div>
  `;

  if (!document.getElementById("trisul-comparison-style")) {
    const style = document.createElement("style");
    style.id = "trisul-comparison-style";

    style.textContent = `
      #trisul-comparison {
        margin:35px 0;
        padding:30px 20px;
        background:#151515;
        border:1px solid rgba(214,181,74,.35);
        border-radius:15px;
        color:#fff;
      }

      .comparison-inner {
        max-width:1050px;
        margin:auto;
      }

      .comparison-label {
        color:#d6b54a;
        font-size:11px;
        letter-spacing:3px;
      }

      .comparison-inner h2 {
        color:#f0d889;
      }

      .comparison-description {
        color:#aaa;
        font-size:13px;
        line-height:1.7;
      }

      .comparison-grid {
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:18px;
        margin-top:25px;
      }

      .comparison-card {
        padding:22px;
        background:linear-gradient(145deg,#242424,#111);
        border:1px solid #49412d;
        border-radius:12px;
        min-width:0;
      }

      .comparison-card-top {
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        gap:8px;
      }

      .comparison-range {
        color:#d6b54a;
        font-size:10px;
        letter-spacing:2px;
      }

      .comparison-demo-tag {
        color:#aaa;
        font-size:9px;
        border:1px solid #555;
        padding:5px 8px;
        border-radius:20px;
      }

      .comparison-card h3 {
        color:#f0d889;
        font-size:24px;
        margin:12px 0 5px;
      }

      .comparison-configuration {
        color:#bbb;
        font-size:13px;
      }

      .comparison-section-heading {
        color:#d6b54a;
        font-size:11px;
        letter-spacing:1.5px;
        margin-top:24px;
        margin-bottom:10px;
        padding-bottom:9px;
        border-bottom:1px solid #444;
      }

      .comparison-spec {
        display:flex;
        justify-content:space-between;
        gap:10px;
        padding:11px 0;
        border-bottom:1px solid #333;
        font-size:12px;
      }

      .comparison-spec span {
        color:#aaa;
      }

      .comparison-spec strong {
        color:#fff;
        text-align:right;
      }

      .comparison-feature-list {
        padding-left:20px;
        color:#ddd;
        font-size:12px;
        line-height:1.8;
      }

      .comparison-feature-list li::marker {
        color:#d6b54a;
      }

      .comparison-price {
        display:flex;
        flex-direction:column;
        gap:8px;
        margin-top:22px;
        padding:16px;
        background:rgba(214,181,74,.08);
        border:1px solid rgba(214,181,74,.3);
        border-radius:9px;
      }

      .comparison-price span {
        color:#aaa;
        font-size:10px;
        letter-spacing:1px;
      }

      .comparison-price strong {
        color:#f0d889;
        font-size:18px;
      }

      .comparison-price small {
        color:#999;
        font-size:10px;
      }

      .comparison-remove-button {
        width:100%;
        margin-top:18px;
        padding:12px;
        background:transparent;
        border:1px solid #8c5555;
        border-radius:7px;
        color:#e5aaaa;
        cursor:pointer;
      }

      .comparison-remove-button:hover {
        background:rgba(180,70,70,.15);
      }

      .comparison-hint {
        margin-top:22px;
        padding:14px;
        color:#d6b54a;
        background:#222;
        border-radius:8px;
        text-align:center;
        font-size:12px;
      }

      @media(max-width:650px) {
        .comparison-grid {
          grid-template-columns:1fr;
        }

        #trisul-comparison {
          padding:22px 13px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  const individualSection = document.getElementById("individual-variants");
  const variantsSection = document.querySelector(".variants");

  if (individualSection) {
    individualSection.insertAdjacentElement("afterend", section);
  } else if (variantsSection) {
    variantsSection.insertAdjacentElement("afterend", section);
  }
}

// ==========================================
// PUNE DEMO LOCATION
// ==========================================

window.setManualCity = function(city) {
  if (city && city !== "Pune") {
    alert("This demonstration currently supports Pune pricing only.");
    return;
  }

  window.trisulCustomerCity = "Pune";
  window.trisulCustomerState = "Maharashtra";

  const status = document.getElementById("location-status");
  if (status) {
    status.textContent = "Pune, Maharashtra · Pune demo pricing selected.";
  }
};

window.detectCustomerLocation = function() {
  const status = document.getElementById("location-status");
  if (status) {
    status.textContent =
      "This demonstration currently uses Pune pricing. Select Pune to continue.";
  }
  window.setManualCity("Pune");
};

// ==========================================
// PDF DOWNLOAD / PRINT
// ==========================================

(function addTrisulPDFButton() {
  const catalogue = document.querySelector(".catalogue");
  const variants = document.querySelector(".variants");

  if (!catalogue || document.getElementById("trisul-pdf-tools")) return;

  const tools = document.createElement("section");
  tools.id = "trisul-pdf-tools";

  tools.innerHTML = `
    <button type="button" id="trisul-download-pdf">
      ↓ Download Catalogue PDF
    </button>
    <p>Save or print your TRISUL digital catalogue.</p>
  `;

  if (variants) variants.insertAdjacentElement("beforebegin", tools);
  else catalogue.prepend(tools);

  document.getElementById("trisul-download-pdf")
    .addEventListener("click", () => window.print());

  const style = document.createElement("style");

  style.textContent = `
    #trisul-pdf-tools {
      text-align:center;
      margin:25px 0;
      padding:20px;
    }

    #trisul-download-pdf {
      padding:15px 28px;
      background:linear-gradient(135deg,#e5c45e,#b28b28);
      color:#111;
      border:1px solid #f0d889;
      border-radius:9px;
      font-size:15px;
      font-weight:bold;
      cursor:pointer;
    }

    #trisul-pdf-tools p {
      color:#aaa;
      font-size:12px;
    }

    @media print {
      #trisul-pdf-tools,
      .variant-buttons,
      .individual-variant-buttons,
      .compare-action-button,
      .comparison-remove-button,
      .trisul-view-variants {
        display:none !important;
      }

      body {
        background:white !important;
        color:black !important;
      }

      body::before,
      body::after {
        display:none !important;
      }

      .catalogue,
      .selected-variant-card,
      #trisul-comparison,
      #trisul-pricing {
        color:black !important;
        background:white !important;
        box-shadow:none !important;
      }
    }
  `;

  document.head.appendChild(style);
})();

// ==========================================
// EXTERIOR COLOUR GALLERY
// ==========================================

(function addNexonColourGallery() {
  if (document.getElementById("trisul-colour-gallery")) return;

  const colours = [
    {
      name:"Pristine White",
      image:"https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250618112536_Tata_Nexon_Calgury_White%5B1%5D.jpg?fm=auto&q=75&w=256"
    },
    {
      name:"Daytona Grey",
      image:"https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250618112555_Tata_Nexon_Daytona_Grey%5B1%5D.jpg?fm=auto&q=75&w=256"
    },
    {
      name:"Grassland Beige",
      image:"https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250618112615_Tata_Nexon_Grassland_Beige%5B1%5D.jpg?fm=auto&q=75&w=256"
    },
    {
      name:"Ocean Blue",
      image:"https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250618112631_Tata_Nexon_Ocean_Blue%5B1%5D.jpg?fm=auto&q=75&w=256"
    },
    {
      name:"Pure Grey",
      image:"https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250618112646_Tata_Nexon_Pure_Grey%5B1%5D.jpg?fm=auto&q=75&w=256"
    },
    {
      name:"Royal Blue",
      image:"https://cdn-s3.autocarindia.com/legacy/cdni/mmv_images/colors/20250618112659_Tata_Nexon_Royal_Blue%5B1%5D.jpg?fm=auto&q=75&w=256"
    }
  ];

  const gallery = document.createElement("section");
  gallery.id = "trisul-colour-gallery";

  gallery.innerHTML = `
    <div class="trisul-gallery-inner">
      <p class="trisul-gallery-label">TRISUL COLOUR STUDIO</p>
      <h2>Choose Your Nexon Colour</h2>
      <p class="trisul-gallery-description">
        Explore the available exterior shades of the Tata Nexon.
        Select a colour to view its photograph.
      </p>

      <div class="trisul-main-preview">
        <img id="trisul-main-colour-image"
          src="${colours[0].image}"
          alt="Tata Nexon in Pristine White">

        <div class="trisul-preview-caption">
          <span>SELECTED COLOUR</span>
          <h3 id="trisul-selected-colour-name">Pristine White</h3>
        </div>
      </div>

      <div class="trisul-colour-grid">
        ${colours.map((colour, index) => `
          <button type="button"
            class="trisul-colour-card ${index === 0 ? "active" : ""}"
            data-colour-index="${index}">
            <img src="${colour.image}"
              alt="Tata Nexon ${colour.name}" loading="lazy">
            <span>${colour.name}</span>
          </button>
        `).join("")}
      </div>

      <p class="trisul-gallery-credit">
        Image references: Autocar India colour gallery.
        Actual paint appearance may vary with lighting and display.
      </p>
    </div>
  `;

  const variants = document.querySelector(".variants");

  if (variants) {
    variants.insertAdjacentElement("beforebegin", gallery);
  } else {
    document.querySelector(".catalogue").appendChild(gallery);
  }

  const preview = document.getElementById("trisul-main-colour-image");
  const selectedName = document.getElementById("trisul-selected-colour-name");

  gallery.querySelectorAll(".trisul-colour-card").forEach(button => {
    button.addEventListener("click", function() {
      const selected = colours[Number(this.dataset.colourIndex)];
      if (!selected) return;

      preview.src = selected.image;
      preview.alt = "Tata Nexon in " + selected.name;
      selectedName.textContent = selected.name;

      gallery.querySelectorAll(".trisul-colour-card")
        .forEach(card => card.classList.remove("active"));

      this.classList.add("active");
    });
  });

  console.log("TRISUL Nexon colour gallery ready.");
})();

// ==========================================
// INTERIOR GALLERY
// ==========================================

(function addNexonInteriorGallery() {
  if (document.getElementById("trisul-interior-gallery")) return;

  const interiorImages = [
    {
      name:"Dashboard",
      image:"https://cdn-s3.autocarindia.com/Tata/nexon/_BE07617.JPG?fm=auto&q=75&w=256"
    },
    {
      name:"Infotainment System",
      image:"https://cdn-s3.autocarindia.com/Tata/nexon/_BE07209.JPG?fm=auto&q=75&w=256"
    },
    {
      name:"Digital Instrument Cluster",
      image:"https://cdn-s3.autocarindia.com/Tata/nexon/_BE07599.JPG?fm=auto&q=75&w=256"
    },
    {
      name:"Front Row Seats",
      image:"https://cdn-s3.autocarindia.com/Tata/nexon/_BE07572.JPG?fm=auto&q=75&w=256"
    },
    {
      name:"Second Row Seats",
      image:"https://cdn-s3.autocarindia.com/Tata/nexon/_BE07565.JPG?fm=auto&q=75&w=256"
    }
  ];

  const gallery = document.createElement("section");
  gallery.id = "trisul-interior-gallery";

  gallery.innerHTML = `
    <div class="trisul-interior-inner">
      <p class="trisul-interior-label">TRISUL INTERIOR EXPERIENCE</p>
      <h2>Explore the Nexon Interior</h2>
      <p class="trisul-interior-description">
        Explore the dashboard, technology and seating of the Tata Nexon.
      </p>

      <div class="trisul-interior-preview">
        <img id="trisul-interior-main-image"
          src="${interiorImages[0].image}"
          alt="Tata Nexon dashboard">

        <div class="trisul-interior-caption">
          <span>INTERIOR VIEW</span>
          <h3 id="trisul-interior-selected-name">Dashboard</h3>
        </div>
      </div>

      <div class="trisul-interior-grid">
        ${interiorImages.map((item, index) => `
          <button type="button"
            class="trisul-interior-card ${index === 0 ? "active" : ""}"
            data-interior-index="${index}">
            <img src="${item.image}"
              alt="Tata Nexon ${item.name}" loading="lazy">
            <span>${item.name}</span>
          </button>
        `).join("")}
      </div>

      <p class="trisul-interior-credit">
        Reference photographs: Autocar India.
        Equipment and finishes may vary by variant.
      </p>
    </div>
  `;

  const colourGallery = document.getElementById("trisul-colour-gallery");
  const variants = document.querySelector(".variants");

  if (colourGallery) {
    colourGallery.insertAdjacentElement("afterend", gallery);
  } else if (variants) {
    variants.insertAdjacentElement("beforebegin", gallery);
  } else {
    document.querySelector(".catalogue").appendChild(gallery);
  }

  const mainImage = document.getElementById("trisul-interior-main-image");
  const selectedName = document.getElementById("trisul-interior-selected-name");

  gallery.querySelectorAll(".trisul-interior-card").forEach(button => {
    button.addEventListener("click", function() {
      const selected = interiorImages[Number(this.dataset.interiorIndex)];
      if (!selected) return;

      mainImage.src = selected.image;
      mainImage.alt = "Tata Nexon " + selected.name;
      selectedName.textContent = selected.name;

      gallery.querySelectorAll(".trisul-interior-card")
        .forEach(card => card.classList.remove("active"));

      this.classList.add("active");
    });
  });

  console.log("TRISUL Nexon interior gallery ready.");
})();

// ==========================================
// BASE / MID / TOP RANGE CARDS
// ==========================================

(function addAutomaticRangeComparison() {
  const oldSection = document.getElementById("trisul-range-overview");
  const oldStyle = document.getElementById("trisul-range-overview-style");

  if (oldSection) oldSection.remove();
  if (oldStyle) oldStyle.remove();

  const groups = ["Base", "Mid", "Top"];
  const section = document.createElement("section");
  section.id = "trisul-range-overview";

  section.innerHTML = `
    <div class="trisul-range-inner">
      <p class="trisul-range-label">TRISUL VARIANT GUIDE</p>
      <h2>Explore Nexon Variants</h2>

      <p class="trisul-range-description">
        Compare the Base, Mid and Top ranges and explore
        the variants available in each range.
      </p>

      <div class="trisul-range-grid">
        ${groups.map(group => {
          const data = variantData[group];
          const fuels = [...new Set(data.variants.map(v => v[1]))];
          const transmissions = [...new Set(data.variants.map(v => v[2]))];
          const trims = [...new Set(data.variants.map(v => v[0]))];

          const highlights = [...new Set(
            trims.flatMap(trim => featureData[trim] || [])
          )].slice(0, 5);

          return `
            <article class="trisul-range-card">
              <div class="trisul-range-card-heading">
                <span>${group.toUpperCase()} RANGE</span>
                <h3>${data.name}</h3>
                <p>${data.variants.length} listed variants</p>
              </div>

              <div class="trisul-range-info">
                <span>Fuel options</span>
                <strong>${fuels.join(" / ")}</strong>
              </div>

              <div class="trisul-range-info">
                <span>Transmission options</span>
                <strong>${transmissions.join(" / ")}</strong>
              </div>

              <h4>Variants in this demo</h4>

              <ul class="trisul-range-variant-list">
                ${data.variants.map(variant => `
                  <li>
                    <strong>${variant[0]}</strong>
                    <span>${variant[1]} · ${variant[2]}</span>
                  </li>
                `).join("")}
              </ul>

              <h4>Feature highlights</h4>

              <ul class="trisul-range-feature-list">
                ${highlights.map(feature => `<li>${feature}</li>`).join("")}
              </ul>

              <button
                type="button"
                class="trisul-view-variants"
                onclick="selectVariant('${group}')">
                View ${group} Variants →
              </button>
            </article>
          `;
        }).join("")}
      </div>

      <p class="trisul-range-note">
        This is a TRISUL demonstration overview. Variant names,
        specifications and feature highlights are sample catalogue
        content and should be checked against the latest official
        Tata Motors information before public release.
      </p>
    </div>
  `;

  const variantsSection = document.querySelector(".variants");
  const catalogue = document.querySelector(".catalogue");

  if (variantsSection) {
    variantsSection.insertAdjacentElement("afterend", section);
  } else if (catalogue) {
    catalogue.appendChild(section);
  }

  const style = document.createElement("style");
  style.id = "trisul-range-overview-style";

  style.textContent = `
    #trisul-range-overview {
      display:block !important;
      width:100% !important;
      box-sizing:border-box !important;
      margin:35px 0 !important;
      padding:32px 20px !important;
      color:#fff !important;
      background:transparent !important;
      border:none !important;
      box-shadow:none !important;
    }

    #trisul-range-overview .trisul-range-inner {
      display:block !important;
      width:100% !important;
      max-width:1100px !important;
      margin:auto !important;
      padding:0 !important;
      background:transparent !important;
      border:none !important;
      box-shadow:none !important;
    }

    .trisul-range-label {
      color:#d6b54a !important;
      font-size:11px !important;
      letter-spacing:3px !important;
    }

    #trisul-range-overview .trisul-range-inner h2 {
      color:#f0d889 !important;
      margin-bottom:10px !important;
    }

    .trisul-range-description {
      color:#aaa !important;
      font-size:14px !important;
      line-height:1.6 !important;
      margin-bottom:25px !important;
    }

    #trisul-range-overview .trisul-range-grid {
      display:grid !important;
      grid-template-columns:repeat(3,minmax(0,1fr)) !important;
      gap:18px !important;
      align-items:stretch !important;
      width:100% !important;
      background:transparent !important;
      border:none !important;
      box-shadow:none !important;
      padding:0 !important;
    }

    #trisul-range-overview .trisul-range-card {
      display:block !important;
      box-sizing:border-box !important;
      width:100% !important;
      min-width:0 !important;
      padding:22px 18px !important;
      margin:0 !important;
      color:#fff !important;
      background:linear-gradient(145deg,#242424,#111) !important;
      border:1px solid rgba(214,181,74,.55) !important;
      border-radius:14px !important;
      box-shadow:0 8px 24px rgba(0,0,0,.25) !important;
    }

    .trisul-range-card-heading {
      padding-bottom:15px !important;
      border-bottom:1px solid #454545 !important;
      margin-bottom:15px !important;
    }

    .trisul-range-card-heading span {
      color:#d6b54a !important;
      font-size:10px !important;
      letter-spacing:2px !important;
    }

    .trisul-range-card-heading h3 {
      color:#f0d889 !important;
      margin:8px 0 !important;
      font-size:21px !important;
    }

    .trisul-range-card-heading p {
      color:#999 !important;
      font-size:12px !important;
      margin:0 !important;
    }

    .trisul-range-info {
      display:flex !important;
      flex-direction:column !important;
      gap:5px !important;
      padding:11px 0 !important;
      border-bottom:1px solid #383838 !important;
    }

    .trisul-range-info span {
      color:#999 !important;
      font-size:11px !important;
    }

    .trisul-range-info strong {
      color:#eee !important;
      font-size:13px !important;
    }

    .trisul-range-card h4 {
      color:#d6b54a !important;
      font-size:13px !important;
      margin:20px 0 10px !important;
    }

    .trisul-range-variant-list,
    .trisul-range-feature-list {
      padding-left:18px !important;
      margin:0 !important;
    }

    .trisul-range-variant-list li,
    .trisul-range-feature-list li {
      color:#ddd !important;
      font-size:12px !important;
      line-height:1.5 !important;
      margin-bottom:9px !important;
    }

    .trisul-range-variant-list li strong {
      display:block !important;
      color:#fff !important;
    }

    .trisul-range-variant-list li span {
      display:block !important;
      color:#aaa !important;
      font-size:11px !important;
    }

    .trisul-range-feature-list li::marker,
    .trisul-range-variant-list li::marker {
      color:#d6b54a !important;
    }

    #trisul-range-overview .trisul-view-variants {
      display:block !important;
      width:100% !important;
      margin-top:22px !important;
      padding:13px 15px !important;
      color:#111 !important;
      background:linear-gradient(135deg,#e5c45e,#b28b28) !important;
      border:1px solid #f0d889 !important;
      border-radius:8px !important;
      font-size:13px !important;
      font-weight:bold !important;
      cursor:pointer !important;
      transition:transform .2s ease, filter .2s ease !important;
    }

    #trisul-range-overview .trisul-view-variants:hover {
      transform:translateY(-2px) !important;
      filter:brightness(1.12) !important;
    }

    .trisul-range-note {
      color:#888 !important;
      font-size:11px !important;
      line-height:1.6 !important;
      margin-top:22px !important;
    }

    @media(max-width:800px) {
      #trisul-range-overview .trisul-range-grid {
        grid-template-columns:1fr !important;
      }
    }
  `;

  document.head.appendChild(style);
  console.log("TRISUL Base, Mid and Top cards ready.");
})();
