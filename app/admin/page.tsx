async function getApplications() {
  const res = await fetch("http://localhost:3000/api/admin/applications", {
    cache: "no-store",
  });
  return res.json();
}

export default async function AdminPage() {
  const { applications } = await getApplications();

  return (
    <div style={{ padding: "24px", color: "white" }}>
      <h1>Applications Dashboard</h1>

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Email</th>
            <th>Domain</th>
            <th>Submitted At</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app: any) => (
            <tr key={app.id}>
              <td>{app.roll}</td>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.domain}</td>
              <td>{new Date(app.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
