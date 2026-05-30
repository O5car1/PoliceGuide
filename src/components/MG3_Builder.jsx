import { useState, useRef } from "react";

const OFFENCES = [
  { id: "robbery", label: "Robbery", section: "Section 8 of the Theft Act 1968" },
  { id: "theft", label: "Theft", section: "Section 1(1) of the Theft Act 1968" },
  { id: "theft_mv", label: "Theft of a Motor Vehicle", section: "Section 1(1) of the Theft Act 1968" },
  { id: "dangerous", label: "Dangerous Driving", section: "Section 2 of the Road Traffic Act 1988" },
  { id: "careless", label: "Careless Driving", section: "Section 3 of the Road Traffic Act 1988" },
  { id: "fail_stop", label: "Failing to Stop for Police", section: "Section 163 of the Road Traffic Act 1988" },
  { id: "no_licence", label: "Driving Otherwise Than in Accordance with a Licence", section: "Section 87(1) of the Road Traffic Act 1988" },
  { id: "no_insurance", label: "Using a Motor Vehicle Without Insurance", section: "Section 143(1) of the Road Traffic Act 1988" },
  { id: "going_equipped", label: "Going Equipped for Theft", section: "Section 25 of the Theft Act 1968" },
  { id: "twoc", label: "Taking Without Owner's Consent", section: "Section 12(1) of the Theft Act 1968" },
  { id: "assault_ew", label: "Assault on Emergency Worker", section: "Section 1 of the Assaults on Emergency Workers (Offences) Act 2018" },
  { id: "abh", label: "ABH", section: "Section 47 of the Offences Against the Person Act 1861" },
  { id: "gbh", label: "GBH", section: "Section 18 of the Offences Against the Person Act 1861" },
  { id: "common_assault", label: "Common Assault", section: "Section 39 of the Criminal Justice Act 1988" },
  { id: "weapon", label: "Possession of Offensive Weapon", section: "Section 1 of the Prevention of Crime Act 1953" },
  { id: "bladed", label: "Possession of Bladed Article", section: "Section 139 of the Criminal Justice Act 1988" },
  { id: "crim_damage", label: "Criminal Damage", section: "Section 1(1) of the Criminal Damage Act 1971" },
  { id: "drink_drive", label: "Driving with Excess Alcohol", section: "Section 5(1)(a) of the Road Traffic Act 1988" },
  { id: "drug_drive", label: "Drug Driving", section: "Section 5A of the Road Traffic Act 1988" },
  { id: "escape", label: "Escape from Lawful Custody", section: "Common Law" },
  { id: "poss_drugs", label: "Possession of Controlled Drug", section: "Section 5(2) of the Misuse of Drugs Act 1971" },
  { id: "pwits", label: "Possession with Intent to Supply", section: "Section 5(3) of the Misuse of Drugs Act 1971" },
  { id: "public_order", label: "Public Order (s.5)", section: "Section 5 of the Public Order Act 1986" },
  { id: "other", label: "Other (specify below)", section: "" },
];

const STEPS = ["basics", "suspect", "vehicle", "officers", "narrative", "offences", "arrest", "additional", "review"];
const LABELS = { basics: "Date, Time & Location", suspect: "Suspect Details", vehicle: "Vehicle Details", officers: "Officers Involved", narrative: "What Happened", offences: "Offences", arrest: "Arrest Details", additional: "Additional Info", review: "Review & Generate" };

export default function MG3Builder() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  const [d, setD] = useState({
    date: "", time: "", location: "",
    sFirst: "", sLast: "", sDob: "", sGender: "Male", sIdBy: "Live Scan", sCitId: "",
    sUnknown: false, sLicence: "Full UK Driving Licence",
    vType: "Car", vReg: "", vMake: "", vModel: "", vColour: "",
    vRegistered: "Yes", vKeeper: "", vInsurance: "Valid",
    officers: "PC ARTHUR PEEL, PC NICK PEEL", arrestOfficer: "PC ARTHUR PEEL", driverOfficer: "",
    narrative: "", offences: [], otherName: "", otherSection: "",
    comments: "", searchDone: false, searchBy: "", searchPower: "Section 32 PACE", searchFound: "",
  });

  const u = (k, v) => setD(p => ({ ...p, [k]: v }));
  const tog = id => setD(p => ({ ...p, offences: p.offences.includes(id) ? p.offences.filter(x => x !== id) : [...p.offences, id] }));
  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const fullName = () => d.sUnknown ? "UNKNOWN MALE" : `${d.sFirst} ${d.sLast}`.toUpperCase().trim();
  const surname = () => d.sUnknown ? "the suspect" : d.sLast.toUpperCase();
  const pro = () => d.sGender === "Male" ? "he" : "she";
  const gLabel = () => d.sGender === "Male" ? "male" : "female";

  const generate = () => {
    let ps = [];
    let p1 = `On ${d.date} at approximately ${d.time} hours, ${d.officers} were on mobile patrol on ${d.location}`;
    if (d.narrative) { p1 += `. ${d.narrative}`; if (!p1.endsWith(".")) p1 += "."; } else p1 += ".";
    ps.push(p1);

    if (!d.sUnknown) {
      let p2 = `The ${gLabel()} was identified as ${fullName()}, date of birth ${d.sDob}. ${surname()} was arrested by ${d.arrestOfficer}`;
      const names = d.offences.map(id => { if (id === "other") return d.otherName; const o = OFFENCES.find(x => x.id === id); return o ? o.label : ""; }).filter(Boolean);
      if (names.length) p2 += ` for ${names.join(", ")}`;
      p2 += ` and was administered the standard caution.`;
      p2 += d.comments ? ` In response ${surname()} stated "${d.comments}".` : ` ${surname()} made no significant comment in response.`;
      ps.push(p2);
    } else {
      ps.push("The suspect was not identified at the scene and remains outstanding.");
    }

    if (!d.sUnknown && d.sIdBy && d.sCitId) {
      ps.push(`The identity of ${surname()} was confirmed at custody by way of ${d.sIdBy} fingerprint analysis which returned a confirmed trace to ${fullName()}, date of birth ${d.sDob}, Citizen ID ${d.sCitId}.`);
    }

    if (d.vReg) {
      let p4 = "";
      if (d.vRegistered === "No") {
        p4 = `A PNC check was conducted on the vehicle, registered ${d.vReg}, which returned no records, indicating the vehicle was not registered on the Police National Computer.`;
      } else {
        const desc = [d.vColour, d.vMake, d.vModel].filter(Boolean).join(" ");
        p4 = desc ? `The vehicle was a ${desc}, registered ${d.vReg}.` : `The vehicle was registered ${d.vReg}.`;
        if (d.vKeeper) p4 += ` The registered keeper is recorded as ${d.vKeeper.toUpperCase()}.`;
      }
      if (d.sLicence === "Provisional Licence" && !d.sUnknown) p4 += ` A PNC check confirmed that ${surname()} holds a provisional licence only at the time of the offence.`;
      if (d.vInsurance === "Not Valid" && !d.sUnknown) p4 += ` A further PNC check confirmed that no valid insurance policy existed for the vehicle at the time of the offence.`;
      ps.push(p4);
    }

    if (d.searchDone && d.searchFound) {
      ps.push(`${d.searchBy || d.arrestOfficer} conducted a search of ${surname()} pursuant to ${d.searchPower} which revealed ${d.searchFound}.`);
    }

    if (d.offences.length) {
      const strs = d.offences.map(id => { if (id === "other") return `${d.otherName}${d.otherSection ? ` contrary to ${d.otherSection}` : ""}`; const o = OFFENCES.find(x => x.id === id); return o ? `${o.label} contrary to ${o.section}` : ""; }).filter(Boolean);
      ps.push(`It is submitted that ${surname()} committed the following offences: ${strs.join("; ")}.`);
    }

    setOutput(ps.join("\n\n"));
    setDone(true);
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(output); } catch { if (ref.current) { ref.current.select(); document.execCommand("copy"); } }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => { setStep(0); setDone(false); setOutput(""); setCopied(false); };

  const box = { padding: "16px", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "12px", background: "#fff" };
  const inp = { width: "100%", padding: "8px 10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box", fontFamily: "inherit" };
  const sel = { ...inp };
  const lbl = { display: "block", marginBottom: "4px", fontSize: "12px", fontWeight: 600, color: "#555", textTransform: "uppercase" };
  const grp = { marginBottom: "14px" };
  const btn1 = { padding: "10px 20px", background: "#1a56db", color: "#fff", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 600, cursor: "pointer" };
  const btn2 = { padding: "10px 20px", background: "#fff", color: "#555", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px", fontWeight: 600, cursor: "pointer" };

  if (done) {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", padding: "20px", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>MG3 — Generated</h2>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={btn2} onClick={reset}>New MG3</button>
            <button style={{ ...btn1, background: copied ? "#16a34a" : "#1a56db" }} onClick={copy}>{copied ? "✓ Copied" : "Copy"}</button>
          </div>
        </div>
        <textarea ref={ref} readOnly value={output} style={{ ...inp, minHeight: 350, resize: "vertical", lineHeight: 1.7 }} />
      </div>
    );
  }

  const renderStep = () => {
    const s = STEPS[step];
    if (s === "basics") return (
      <div>
        <div style={grp}><label style={lbl}>Date</label><input style={inp} placeholder="e.g. 28th May 2026" value={d.date} onChange={e => u("date", e.target.value)} /></div>
        <div style={grp}><label style={lbl}>Time</label><input style={inp} placeholder="e.g. 21:20" value={d.time} onChange={e => u("time", e.target.value)} /></div>
        <div style={grp}><label style={lbl}>Location</label><input style={inp} placeholder="e.g. Vinewood Boulevard" value={d.location} onChange={e => u("location", e.target.value)} /></div>
      </div>
    );
    if (s === "suspect") return (
      <div>
        <div style={{ ...grp, display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" checked={d.sUnknown} onChange={e => u("sUnknown", e.target.checked)} />
          <label style={{ fontSize: 13, color: "#555" }}>Suspect not identified / outstanding</label>
        </div>
        {!d.sUnknown && <>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>First Name</label><input style={inp} value={d.sFirst} onChange={e => u("sFirst", e.target.value)} /></div>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Last Name</label><input style={inp} value={d.sLast} onChange={e => u("sLast", e.target.value)} /></div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Date of Birth</label><input style={inp} placeholder="e.g. 21st January 2000" value={d.sDob} onChange={e => u("sDob", e.target.value)} /></div>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Gender</label><select style={sel} value={d.sGender} onChange={e => u("sGender", e.target.value)}><option>Male</option><option>Female</option></select></div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Identified By</label><select style={sel} value={d.sIdBy} onChange={e => u("sIdBy", e.target.value)}><option>Live Scan</option><option>ID Provided</option><option>PNC</option><option value="">Not confirmed</option></select></div>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Citizen ID</label><input style={inp} value={d.sCitId} onChange={e => u("sCitId", e.target.value)} /></div>
          </div>
          <div style={grp}><label style={lbl}>Licence Type</label><select style={sel} value={d.sLicence} onChange={e => u("sLicence", e.target.value)}><option>Full UK Driving Licence</option><option>Provisional Licence</option><option>No Licence</option><option>Unknown</option></select></div>
        </>}
      </div>
    );
    if (s === "vehicle") return (
      <div>
        <div style={grp}><label style={lbl}>Vehicle Type</label><select style={sel} value={d.vType} onChange={e => u("vType", e.target.value)}><option>Car</option><option>Motorcycle</option><option>Van</option><option>Lorry</option><option>Other</option><option>None</option></select></div>
        {d.vType !== "None" && <>
          <div style={grp}><label style={lbl}>Registration</label><input style={inp} value={d.vReg} onChange={e => u("vReg", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Make</label><input style={inp} value={d.vMake} onChange={e => u("vMake", e.target.value)} /></div>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Model</label><input style={inp} value={d.vModel} onChange={e => u("vModel", e.target.value)} /></div>
          </div>
          <div style={grp}><label style={lbl}>Colour</label><input style={inp} value={d.vColour} onChange={e => u("vColour", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>On PNC?</label><select style={sel} value={d.vRegistered} onChange={e => u("vRegistered", e.target.value)}><option value="Yes">Yes</option><option value="No">No — Not on PNC</option></select></div>
            <div style={{ ...grp, flex: 1 }}><label style={lbl}>Insurance</label><select style={sel} value={d.vInsurance} onChange={e => u("vInsurance", e.target.value)}><option>Valid</option><option>Not Valid</option><option>Unknown</option></select></div>
          </div>
          {d.vRegistered === "Yes" && <div style={grp}><label style={lbl}>Registered Keeper</label><input style={inp} value={d.vKeeper} onChange={e => u("vKeeper", e.target.value)} /></div>}
        </>}
      </div>
    );
    if (s === "officers") return (
      <div>
        <div style={grp}><label style={lbl}>Officers Present</label><input style={inp} value={d.officers} onChange={e => u("officers", e.target.value)} /></div>
        <div style={grp}><label style={lbl}>Driver of Police Vehicle</label><input style={inp} value={d.driverOfficer} onChange={e => u("driverOfficer", e.target.value)} /></div>
        <div style={grp}><label style={lbl}>Arresting Officer</label><input style={inp} value={d.arrestOfficer} onChange={e => u("arrestOfficer", e.target.value)} /></div>
      </div>
    );
    if (s === "narrative") return (
      <div>
        <div style={grp}>
          <label style={lbl}>What happened (chronological)</label>
          <p style={{ fontSize: 12, color: "#888", margin: "4px 0 8px" }}>Write the key events in order. Use names in BLOCK CAPITALS.</p>
          <textarea style={{ ...inp, minHeight: 180, resize: "vertical", lineHeight: 1.6 }} value={d.narrative} onChange={e => u("narrative", e.target.value)} placeholder="e.g. Officers observed ZINO BANDS riding a motorcycle onto the public pavement..." />
        </div>
      </div>
    );
    if (s === "offences") return (
      <div>
        <label style={{ ...lbl, marginBottom: 10 }}>Select all offences</label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {OFFENCES.map(o => (
            <div key={o.id} onClick={() => tog(o.id)} style={{ padding: "8px 10px", borderRadius: 6, border: d.offences.includes(o.id) ? "2px solid #1a56db" : "1px solid #ddd", background: d.offences.includes(o.id) ? "#eff6ff" : "#fff", cursor: "pointer", fontSize: 13, color: d.offences.includes(o.id) ? "#1a56db" : "#555", userSelect: "none" }}>
              {d.offences.includes(o.id) ? "✓ " : ""}{o.label}
            </div>
          ))}
        </div>
        {d.offences.includes("other") && <div style={{ marginTop: 12 }}>
          <div style={grp}><label style={lbl}>Offence Name</label><input style={inp} value={d.otherName} onChange={e => u("otherName", e.target.value)} /></div>
          <div style={grp}><label style={lbl}>Legislation</label><input style={inp} value={d.otherSection} onChange={e => u("otherSection", e.target.value)} /></div>
        </div>}
      </div>
    );
    if (s === "arrest") return (
      <div>
        <div style={grp}><label style={lbl}>Significant Comments (leave blank if none)</label><input style={inp} value={d.comments} onChange={e => u("comments", e.target.value)} placeholder={`e.g. "of course I'll fail to stop"`} /></div>
      </div>
    );
    if (s === "additional") return (
      <div>
        <div style={{ ...grp, display: "flex", alignItems: "center", gap: 8 }}>
          <input type="checkbox" checked={d.searchDone} onChange={e => u("searchDone", e.target.checked)} />
          <label style={{ fontSize: 13, color: "#555" }}>Search conducted on suspect</label>
        </div>
        {d.searchDone && <>
          <div style={grp}><label style={lbl}>Search By</label><input style={inp} value={d.searchBy} onChange={e => u("searchBy", e.target.value)} /></div>
          <div style={grp}><label style={lbl}>Search Power</label><select style={sel} value={d.searchPower} onChange={e => u("searchPower", e.target.value)}><option>Section 1 PACE</option><option>Section 18 PACE</option><option>Section 32 PACE</option><option>Section 23 MDA</option></select></div>
          <div style={grp}><label style={lbl}>What was found?</label><input style={inp} value={d.searchFound} onChange={e => u("searchFound", e.target.value)} /></div>
        </>}
      </div>
    );
    if (s === "review") return (
      <div>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>Review your entries then press Generate.</p>
        <div style={{ background: "#f8f9fa", border: "1px solid #e5e7eb", borderRadius: 8, padding: 14, fontSize: 13, lineHeight: 1.8, color: "#555" }}>
          <div><strong>Date:</strong> {d.date || "—"} <strong style={{ marginLeft: 12 }}>Time:</strong> {d.time || "—"}</div>
          <div><strong>Location:</strong> {d.location || "—"}</div>
          <div><strong>Suspect:</strong> {d.sUnknown ? "Unknown" : `${fullName()}, DOB ${d.sDob}`}</div>
          <div><strong>Vehicle:</strong> {d.vType === "None" ? "None" : `${d.vColour} ${d.vMake} ${d.vModel} — ${d.vReg}`.trim()}</div>
          <div><strong>Officers:</strong> {d.officers}</div>
          <div><strong>Arresting:</strong> {d.arrestOfficer}</div>
          <div><strong>Offences:</strong> {d.offences.map(id => { if (id === "other") return d.otherName; const o = OFFENCES.find(x => x.id === id); return o ? o.label : ""; }).filter(Boolean).join(", ") || "—"}</div>
        </div>
        <button style={{ ...btn1, marginTop: 16 }} onClick={generate}>Generate MG3</button>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "20px", maxWidth: 700, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, background: "#1a56db", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#fff" }}>CP</div>
        <h1 style={{ fontSize: 18, margin: 0 }}>MG3 Builder</h1>
      </div>
      <p style={{ fontSize: 11, color: "#999", margin: "0 0 20px" }}>Capital Police — Response Policing Team</p>

      <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
        {STEPS.map((_, i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= step ? "#1a56db" : "#e5e7eb" }} />)}
      </div>

      <span style={{ fontSize: 11, color: "#1a56db", textTransform: "uppercase", letterSpacing: 1 }}>Step {step + 1} of {STEPS.length}</span>
      <h2 style={{ fontSize: 16, margin: "4px 0 16px" }}>{LABELS[STEPS[step]]}</h2>

      <div style={box}>{renderStep()}</div>

      {STEPS[step] !== "review" && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ ...btn2, opacity: step === 0 ? 0.4 : 1 }} onClick={prev} disabled={step === 0}>← Back</button>
          <button style={btn1} onClick={next}>Next →</button>
        </div>
      )}
      {STEPS[step] === "review" && <button style={btn2} onClick={prev}>← Back</button>}
    </div>
  );
}
