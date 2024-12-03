import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../components/ui/select"
import { Calendar } from "../components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, Clock, Users } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover"

export function BookingFormJsx() {
  const [date, setDate] = useState(null)

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Image */}
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9b386161259095.5a689dfde02ba.jpg"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-[Mazius] text-[#f8bb38] text-center">Table Booking</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Fields */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name*</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name"
                    className="bg-transparent text-white"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name*</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name"
                    className="bg-transparent text-white"
                    required 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email address*</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com"
                    className="bg-transparent text-white"
                    required 
                  />
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <Label>Date*</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-transparent text-white"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="bg-transparent"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Select */}
                <div className="space-y-2">
                  <Label>Time*</Label>
                  <Select>
                    <SelectTrigger className="bg-transparent text-white">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="17:30">5:30 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="18:30">6:30 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="19:30">7:30 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="20:30">8:30 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2 md:col-span-2">
                  <Label>Number of guests*</Label>
                  <Select>
                    <SelectTrigger className="bg-transparent text-white">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "'Guest'" : "'Guests'"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Info Note */}
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-600">
                <p>We have a 15-minute grace period. Please call us if you are running later than 15 minutes after your reservation time.</p>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full text-[#f8bb38]">
                Complete Reservation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}