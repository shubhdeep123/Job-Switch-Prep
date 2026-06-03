import {useBioForm} from '../hooks/useBioForm.ts';

export function BioInput() {
  const { bio, setBio, name, setName, bioLength, textAreaElement, preview, handleReset } = useBioForm();

  // main component

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name Here"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <textarea
          placeholder="Enter Your Bio Here"
          ref={textAreaElement}
          value={bio}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setBio(e.target.value);
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: bioLength > 150 ? "red" : "inherit" }}>
            {bioLength}/150 Characters
          </p>
          <button
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </button>
        </div>
        <p>{preview}</p>
      </div>
    </>
  );
}
