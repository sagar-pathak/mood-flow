import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
  title: "MoodFlow · Dashboard"
};

export default function DashboardPage(){
  const isAuthenticated = false
  return (
    <Main className="">
       <Dashboard />
    </Main>
  )
}