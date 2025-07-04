import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant='me'>This is button</Button>
      </div>
      <div>
        <Input placeholder="Enter text here..." />
      </div>
      <div>
        <Progress value={59} />
      </div>
      <div>
        <Textarea placeholder="this is textarea" />
      </div>
      <div>
        <Checkbox  />
      </div>

    </div>
  );
}
