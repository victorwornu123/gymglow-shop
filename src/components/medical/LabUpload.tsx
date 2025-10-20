import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText } from "lucide-react";
import { toast } from "sonner";

const LabUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      toast.success("Lab results uploaded successfully!");
      setFile(null);
    } else {
      toast.error("Please select a file first");
    }
  };

  const mockResults = [
    { date: "2025-10-15", name: "Complete Blood Count", file: "cbc_results.pdf" },
    { date: "2025-10-10", name: "Lipid Panel", file: "lipid_panel.pdf" },
    { date: "2025-10-05", name: "Thyroid Function", file: "thyroid_test.pdf" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Lab Results</CardTitle>
          <CardDescription>Upload PDF or image files of your lab results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="lab-file">Select File</Label>
            <Input
              id="lab-file"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          {file && (
            <div className="p-4 bg-muted rounded-lg flex items-center gap-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">{file.name}</span>
            </div>
          )}
          <Button onClick={handleUpload} className="w-full">
            <Upload className="w-4 h-4 mr-2" />
            Upload Results
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Previous Lab Results</CardTitle>
          <CardDescription>View and download your past lab results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockResults.map((result, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{result.name}</p>
                    <p className="text-sm text-muted-foreground">{result.date}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LabUpload;
