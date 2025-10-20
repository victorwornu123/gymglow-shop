import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Upload, Activity, Video, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VitalsTracker from "@/components/medical/VitalsTracker";
import LabUpload from "@/components/medical/LabUpload";
import AppointmentsList from "@/components/medical/AppointmentsList";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold">Patient Portal</h1>
          </div>
          <p className="text-sm text-muted-foreground">Welcome, John Doe</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="vitals">Vitals</TabsTrigger>
            <TabsTrigger value="labs">Lab Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Tomorrow</div>
                  <p className="text-xs text-muted-foreground">2:00 PM with Dr. Smith</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Latest BP</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">120/80</div>
                  <p className="text-xs text-muted-foreground">Logged today at 8:00 AM</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Blood Sugar</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95 mg/dL</div>
                  <p className="text-xs text-muted-foreground">Fasting, logged today</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and features</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <Button className="h-24 flex flex-col gap-2">
                  <Video className="w-6 h-6" />
                  <span>Start Video Consultation</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2" onClick={() => setActiveTab("appointments")}>
                  <Calendar className="w-6 h-6" />
                  <span>Book Appointment</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2" onClick={() => setActiveTab("vitals")}>
                  <Activity className="w-6 h-6" />
                  <span>Log Vitals</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2" onClick={() => setActiveTab("labs")}>
                  <Upload className="w-6 h-6" />
                  <span>Upload Lab Results</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments">
            <AppointmentsList userType="patient" />
          </TabsContent>

          <TabsContent value="vitals">
            <VitalsTracker />
          </TabsContent>

          <TabsContent value="labs">
            <LabUpload />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;
