import { useForm } from "../hooks/useForm";

interface SubmitForm {
  name: string;
  email: string;
  password: string;
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F3F4F6",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#1F2937",
    marginBottom: "0.25rem",
  },
  subtitle: {
    fontSize: "13px",
    color: "#6B7280",
    marginBottom: "1.5rem",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1.5px solid #E5E7EB",
    fontSize: "14px",
    color: "White",
    outline: "none",
    transition: "border 0.2s",
  },
  inputError: {
    border: "1.5px solid #EF4444",
  },
  errorText: {
    fontSize: "12px",
    color: "#EF4444",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "1.5rem",
  },
  submitBtn: {
    flex: 1,
    padding: "10px",
    background: "#1F2937",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
  resetBtn: {
    flex: 1,
    padding: "10px",
    background: "#F3F4F6",
    color: "#374151",
    border: "1.5px solid #E5E7EB",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export function SubmitForm() {
  const { values, errors, handleChange, handleReset, validate } =
    useForm<SubmitForm>({
      name: "",
      email: "",
      password: "",
    });

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.title}>Welcome back</p>
        <p style={styles.subtitle}>Fill in your details to continue</p>

        <form onSubmit={validate}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Shubhdeep Sharma"
              style={{
                ...styles.input,
                ...(errors.name ? styles.inputError : {}),
              }}
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {}),
              }}
            />
            {errors.email && (
              <span style={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="••••••••"
              style={{
                ...styles.input,
                ...(errors.password ? styles.inputError : {}),
              }}
            />
            {errors.password && (
              <span style={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <div style={styles.buttonRow}>
            <button type="submit" style={styles.submitBtn}>
              Submit
            </button>
            <button type="button" onClick={handleReset} style={styles.resetBtn}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
