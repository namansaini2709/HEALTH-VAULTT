import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin, Plus, Star, Clock } from 'lucide-react';
import { Doctor } from '@/lib/healthVault';

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface AppointmentsTabProps {
  patientId: string;
}

const AppointmentsTab = ({ patientId }: AppointmentsTabProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [location, setLocation] = useState('DR AKHILESH DAS GUPTA INSTITUTE OF PROFESSIONAL STUDIES');
  const [searchResults, setSearchResults] = useState<Doctor[]>([]);

  // Mock data for appointments
  useEffect(() => {
    const mockAppointments: Appointment[] = [
      {
        id: '1',
        doctorName: 'Dr. Akhilesh Gupta',
        specialty: 'Cardiologist',
        date: '2024-06-15',
        time: '10:30 AM',
        location: 'Healthcare Center, Room 205',
        status: 'upcoming'
      },
      {
        id: '2',
        doctorName: 'Dr. Priya Sharma',
        specialty: 'General Physician',
        date: '2024-06-20',
        time: '2:00 PM',
        location: 'Main Hospital, Room 101',
        status: 'upcoming'
      },
      {
        id: '3',
        doctorName: 'Dr. Rajesh Kumar',
        specialty: 'Dermatologist',
        date: '2024-06-25',
        time: '11:15 AM',
        location: 'Specialty Clinic, Room 302',
        status: 'upcoming'
      }
    ];
    setAppointments(mockAppointments);
  }, []);

  // Generate mock doctor data based on the specified location
  useEffect(() => {
    const mockDoctors: Doctor[] = [
      {
        id: '1',
        name: 'Dr. Akhilesh Gupta',
        email: 'dr.gupta@example.com',
        specialty: 'Cardiologist',
        license: 'C-12345',
        profilePictureUrl: '/placeholder-avatar.jpg'
      },
      {
        id: '2',
        name: 'Dr. Priya Sharma',
        email: 'dr.sharma@example.com',
        specialty: 'General Physician',
        license: 'G-67890',
        profilePictureUrl: '/placeholder-avatar.jpg'
      },
      {
        id: '3',
        name: 'Dr. Rajesh Kumar',
        email: 'dr.kumar@example.com',
        specialty: 'Dermatologist',
        license: 'D-24680',
        profilePictureUrl: '/placeholder-avatar.jpg'
      },
      {
        id: '4',
        name: 'Dr. Sneha Patel',
        email: 'dr.patel@example.com',
        specialty: 'Pediatrician',
        license: 'P-13579',
        profilePictureUrl: '/placeholder-avatar.jpg'
      },
      {
        id: '5',
        name: 'Dr. Vikram Singh',
        email: 'dr.singh@example.com',
        specialty: 'Orthopedic Surgeon',
        license: 'O-98765',
        profilePictureUrl: '/placeholder-avatar.jpg'
      },
      {
        id: '6',
        name: 'Dr. Anjali Reddy',
        email: 'dr.reddy@example.com',
        specialty: 'Neurologist',
        license: 'N-50505',
        profilePictureUrl: '/placeholder-avatar.jpg'
      }
    ];
    setDoctors(mockDoctors);
    setSearchResults(mockDoctors);
  }, []);

  const handleSearch = () => {
    // In a real app, this would make an API call to search for doctors
    // For now, we'll just filter the mock data
    const filtered = doctors.filter(doctor => 
      doctor.specialty.toLowerCase().includes(location.toLowerCase()) ||
      doctor.name.toLowerCase().includes(location.toLowerCase())
    );
    setSearchResults(filtered.length > 0 ? filtered : doctors);
  };

  const handleBookAppointment = (doctorId: string) => {
    // In a real app, this would make an API call to book an appointment
    console.log(`Booking appointment with doctor ${doctorId}`);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to calculate distance (mock implementation)
  const calculateDistance = (index: number) => {
    const distances = ['0.5 km', '0.8 km', '1.2 km', '1.5 km', '2.1 km', '2.7 km'];
    return distances[index % distances.length];
  };

  // Function to get availability status (mock implementation)
  const getAvailability = (index: number) => {
    const statuses = ['Available Today', 'Available Tomorrow', 'Available in 2 days', 'Fully Booked'];
    return statuses[index % statuses.length];
  };

  // Function to get status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Available Today':
        return 'bg-green-100 text-green-800';
      case 'Available Tomorrow':
        return 'bg-yellow-100 text-yellow-800';
      case 'Available in 2 days':
        return 'bg-orange-100 text-orange-800';
      case 'Fully Booked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Appointments
        </h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your scheduled healthcare appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{appointment.doctorName}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                      <p className="text-sm mt-1 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(appointment.date)} at {appointment.time}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {appointment.location}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Reschedule</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Find Doctors Near You</CardTitle>
          <CardDescription>Search for healthcare providers in your area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your location or use current location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Current Location: {location}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-4">Recommended Doctors Near You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((doctor, index) => (
                <Card key={doctor.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        {doctor.profilePictureUrl && <AvatarImage src={doctor.profilePictureUrl} />}
                        <AvatarFallback>
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{doctor.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{doctor.specialty}</p>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusVariant(getAvailability(index))}>
                              {getAvailability(index)}
                            </Badge>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {calculateDistance(index)} away
                            </span>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleBookAppointment(doctor.id)}
                          >
                            Book
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsTab;