import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

function DashboardPieChart({ title, colors, data }) {
  return (
    <div className="rounded bg-lightGreen px-7 pb-8 pt-5 font-semibold">
      <h2 className="text-lg">{title}</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {data?.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardPieChart;
