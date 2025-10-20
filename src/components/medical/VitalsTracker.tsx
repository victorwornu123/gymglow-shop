import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const VitalsTracker = () => {
  const [bp, setBp] = useState({ systolic: "", diastolic: "" });
  const [bloodSugar, setBloodSugar] = useState("");

  const handleLogVitals = () => {
    toast.success("Vitals logged successfully!");
    setBp({ systolic: "", diastolic: "" });
    setBloodSugar("");
  };

  const mockHistory = [
    { date: "2025-10-20", bp: "120/80", sugar: "95" },
    { date: "2025-10-19", bp: "118/78", sugar: "92" },
    { date: "2025-10-18", bp: "122/82", sugar: "98" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Log Daily Vitals</CardTitle>
          <CardDescription>Track your blood pressure and blood sugar levels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Blood Pressure</h3>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Label htmlFor="systolic">Systolic</Label>
                  <Input
                    id="systolic"
                    type="number"
                    placeholder="120"
                    value={bp.systolic}
                    onChange={(e) => setBp({ ...bp, systolic: e.target.value })}
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="diastolic">Diastolic</Label>
                  <Input
                    id="diastolic"
                    type="number"
                    placeholder="80"
                    value={bp.diastolic}
                    onChange={(e) => setBp({ ...bp, diastolic: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Blood Sugar</h3>
              <div>
                <Label htmlFor="sugar">Level (mg/dL)</Label>
                <Input
                  id="sugar"
                  type="number"
                  placeholder="95"
                  value={bloodSugar}
                  onChange={(e) => setBloodSugar(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button onClick={handleLogVitals} className="w-full">
            Log Vitals
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Readings</CardTitle>
          <CardDescription>Your last 7 days of vitals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockHistory.map((entry, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <span className="text-sm font-medium">{entry.date}</span>
                <div className="flex gap-4 text-sm">
                  <span>BP: {entry.bp}</span>
                  <span>Sugar: {entry.sugar} mg/dL</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VitalsTracker;
