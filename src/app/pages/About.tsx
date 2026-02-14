import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Guitar, Music, Award, Heart } from 'lucide-react';

export function About() {
  const qualifications = [
    'Bachelor of Music, Guitar Performance',
    'Certified Music Educator',
    'Grade 8 Classical Guitar',
    'Rock School Diploma',
  ];

  const experience = [
    {
      icon: Guitar,
      title: '15+ Years Teaching',
      description: 'Extensive experience teaching students of all ages and skill levels.',
    },
    {
      icon: Music,
      title: 'Professional Performer',
      description: 'Active musician performing in local venues and recording studios.',
    },
    {
      icon: Award,
      title: 'Competition Judge',
      description: 'Regular judge at regional and national guitar competitions.',
    },
    {
      icon: Heart,
      title: 'Passionate Educator',
      description: 'Dedicated to making music education accessible and enjoyable.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">About Me</h1>
            <p className="text-xl text-gray-300">
              Passionate about music education and helping students discover their potential
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674485144788-9d116e0a9444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBwcmFjdGljZSUyMGhhbmRzJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzEwODY4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Playing guitar close-up"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I picked up my first guitar at the age of 12, and it changed my life forever. 
                  What started as a hobby quickly became a passion, leading me to pursue formal 
                  education in music and dedicate my career to teaching others.
                </p>
                <p>
                  Over the past 15 years, I've had the privilege of teaching hundreds of students, 
                  from young children taking their first steps in music to adults fulfilling lifelong 
                  dreams. Each student brings unique goals and challenges, and I love crafting 
                  personalized lesson plans that help them succeed.
                </p>
                <p>
                  My teaching philosophy is simple: make learning fun, build solid fundamentals, 
                  and help students play the music they love. Whether you want to strum chords 
                  around a campfire or master complex solos, I'm here to guide you on your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl mb-6 text-center">Qualifications & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
                  <span className="text-gray-800">{qual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Grid */}
          <div>
            <h2 className="text-3xl mb-12 text-center">Experience & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experience.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center">Teaching Philosophy</h2>
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                <strong className="text-gray-900">Student-Centered Approach:</strong> Every student 
                learns differently, so I adapt my teaching methods to match your learning style and pace.
              </p>
              <p>
                <strong className="text-gray-900">Strong Foundations:</strong> I believe in building 
                solid fundamentals while keeping lessons engaging and relevant to your musical interests.
              </p>
              <p>
                <strong className="text-gray-900">Real Music, Real Progress:</strong> You'll be playing 
                actual songs from day one, not just exercises. This keeps you motivated and shows 
                immediate progress.
              </p>
              <p>
                <strong className="text-gray-900">Supportive Environment:</strong> Making mistakes is 
                part of learning. I create a positive, encouraging atmosphere where you can grow 
                confidently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
