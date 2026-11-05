import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import ChartFigure from './ChartFigure';
import { commentsByAuthor } from '../utils/stats';

function CommentsByAuthorChart({ posts }) {
  if (posts.length === 0) {
    return <p role="status">No data to chart for the current filters.</p>;
  }

  const data = commentsByAuthor(posts);
  const top = data[0];
  const summary = `Bar chart of total comments per author. ${top.author} has the most, with ${top.comments} comments.`;

  return (
    <ChartFigure
      summary={summary}
      caption="Total comments on each author's posts, highest first."
      columnLabels={['Author', 'Comments']}
      rows={data.map((d) => ({ label: d.author, value: d.comments }))}
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 32, bottom: 8, left: 8 }}
          accessibilityLayer={false}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fill: '#374151', fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="author"
            width={120}
            tick={{ fill: '#374151', fontSize: 12 }}
          />
          <Tooltip />
          <Bar dataKey="comments" name="Comments" fill="#1d4ed8">
            <LabelList dataKey="comments" position="right" fill="#111827" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartFigure>
  );
}

export default CommentsByAuthorChart;