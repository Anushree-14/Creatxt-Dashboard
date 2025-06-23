import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  BusinessCenter,
  BarChart,
  Store,
  GroupAdd,
  CreditCard,
  Map,
} from "@mui/icons-material";
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// Chart Data
const pieData = [
  { name: "Direct", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Social", value: 300 },
];

const lineData = [
  { name: "Jan", sales: 300 },
  { name: "Feb", sales: 500 },
  { name: "Mar", sales: 200 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 400 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// Table Users
const users = [
  { name: "Alice", role: "Admin", email: "alice@example.com" },
  { name: "Bob", role: "Editor", email: "bob@example.com" },
  { name: "Charlie", role: "Viewer", email: "charlie@example.com" },
];

// Project List
const projects = [
  "Redesign Website",
  "Launch Mobile App",
  "Marketing Campaign",
  "Backend API Migration",
];

function Dashboard() {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      <Typography variant="h4" mb={2}>Dashboard</Typography>

      {/* Stat Summary Cards */}
      <Grid container spacing={3}>
        {[
          { title: "Bookings", value: "281", icon: <BusinessCenter />, color: "#3f51b5", note: "+55% than last week" },
          { title: "Today's Users", value: "2,300", icon: <BarChart />, color: "#2196f3", note: "+3% than last month" },
          { title: "Revenue", value: "34k", icon: <Store />, color: "#4caf50", note: "+1% than yesterday" },
          { title: "Followers", value: "+91", icon: <GroupAdd />, color: "#e91e63", note: "Just updated" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Paper elevation={3} sx={{ display: "flex", alignItems: "center", p: 6 }}>
              <Avatar sx={{ bgcolor: item.color, mr: 4 }}>{item.icon}</Avatar>
              <Box>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="h6">{item.value}</Typography>
                <Typography variant="caption" color="text.secondary">{item.note}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Charts and Project List */}
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Traffic Sources</Typography>
            <PieChart width={300} height={250}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 6 }}>
            <Typography variant="h6" gutterBottom>Sales Trend</Typography>
            <ResponsiveContainer width="101%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Active Projects</Typography>
            <List>
              {projects.map((project, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={project} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom><CreditCard sx={{ mr: 1 }} /> Billing</Typography>
            <Typography variant="body2">Your next payment of <strong>$199</strong> is due on <strong>30th June 2025</strong>.</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>User Table</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, i) => (
                    <TableRow key={i}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Map sx={{ fontSize: 60, color: "#aaa" }} />
            <Typography variant="h6" mt={2}>Map Placeholder</Typography>
            <Typography variant="body2">Integrate your location or region-based data here.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;


