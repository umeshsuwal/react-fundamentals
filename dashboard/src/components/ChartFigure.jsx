function ChartFigure({ summary, caption, columnLabels, rows, children }) {
  return (
    <figure className="chart">
      <div role="img" aria-label={summary}>
        {children}
      </div>

      <figcaption>{caption}</figcaption>

      <details>
        <summary>View chart data as a table</summary>
        <table>
          <thead>
            <tr>
              <th scope="col">{columnLabels[0]}</th>
              <th scope="col" className="num">
                {columnLabels[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td className="num">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

export default ChartFigure;