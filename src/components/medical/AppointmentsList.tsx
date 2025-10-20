import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Video } from "lucide-react";
import { toast } from "sonner";

interface AppointmentsListProps {
  userType: "patient" | "doctor";
}

const AppointmentsList = ({ userType }: AppointmentsListProps) => {
  const handleBookAppointment = () => {
    toast.success("Appointment booking form would open here");
  };

  const mockAppointments = [
    {
      date: "2025-10-21",
      time: "2:00 PM",
      doctor: "Dr. Sarah Smith",
      patient: "John Doe",
      type: "Follow-up",
      status: "Upcoming",
    },
    {
      date: "2025-10-25",
      time: "10:30 AM",
      doctor: "Dr. Sarah Smith",
      patient: "Jane Smith",
      type: "Initial Consultation",
      status: "Upcoming",
    },
    {
      date: "2025-10-18",
      time: "3:00 PM",
      doctor: "Dr. Sarah Smith",
      patient: "Bob Johnson",
      type: "Lab Review",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      {userType === "patient" && (
        <Card>
          <CardHeader>
            <CardTitle>Book New Appointment</CardTitle>
            <CardDescription>Schedule a consultation with a doctor</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleBookAppointment} className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>
            {userType === "patient" ? "Your Appointments" : "Patient Appointments"}
          </CardTitle>
          <CardDescription>View and manage upcoming and past appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAppointments.map((apt, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium">
                    {userType === "patient" ? apt.doctor : apt.patient}
                  </p>
                  <p className="text-sm text-muted-foreground">{apt.type}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {apt.date} at {apt.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      apt.status === "Upcoming"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {apt.status}
                  </span>
                  {apt.status === "Upcoming" && (
                    <Button size="sm">
                      <Video className="w-4 h-4 mr-1" />
                      Join
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsList;
