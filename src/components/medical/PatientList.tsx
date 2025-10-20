import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, FileText } from "lucide-react";

const PatientList = () => {
  const [search, setSearch] = useState("");

  const mockPatients = [
    {
      name: "John Doe",
      age: 45,
      lastVisit: "2025-10-18",
      latestBP: "120/80",
      latestSugar: "95 mg/dL",
      status: "Stable",
    },
    {
      name: "Jane Smith",
      age: 38,
      lastVisit: "2025-10-15",
      latestBP: "118/76",
      latestSugar: "88 mg/dL",
      status: "Stable",
    },
    {
      name: "Bob Johnson",
      age: 52,
      lastVisit: "2025-10-12",
      latestBP: "135/88",
      latestSugar: "110 mg/dL",
      status: "Needs Attention",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Patient Search</CardTitle>
          <CardDescription>Find and view patient records</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </CardContent>
      </Card>

      <div className="space-y-4">
        {mockPatients.map((patient, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{patient.name}</CardTitle>
                  <CardDescription>
                    Age {patient.age} • Last visit: {patient.lastVisit}
                  </CardDescription>
                </div>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    patient.status === "Stable"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {patient.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Latest BP</p>
                    <p className="font-medium">{patient.latestBP}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Blood Sugar</p>
                    <p className="font-medium">{patient.latestSugar}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lab Results</p>
                    <Button variant="link" className="h-auto p-0">
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  View Full History
                </Button>
                <Button size="sm">Schedule Appointment</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
