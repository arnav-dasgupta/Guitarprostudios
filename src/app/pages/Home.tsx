import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Guitar, Award, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  const features = [
    {
      icon: Guitar,
      title: 'All Skill Levels',
      description: 'From complete beginners to advanced players, personalized lessons for everyone.',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Professional instruction from a seasoned musician and certified instructor.',
    },
    {
      icon: Users,
      title: 'Flexible Scheduling',
      description: 'In-person and online lessons available to fit your busy lifestyle.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: "Best guitar teacher I've ever had! Patient, knowledgeable, and makes learning fun.",
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'Went from zero to playing my first song in just 2 months. Highly recommend!',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The lessons are structured perfectly and my daughter absolutely loves them.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758525864570-a78364675d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMHRlYWNoZXIlMjBsZXNzb258ZW58MXx8fHwxNzcxMDg2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Guitar teacher with student"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl mb-6">
              Master the Guitar with Expert Instruction
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Unlock your musical potential with personalized lessons tailored to your goals and skill level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Book Your First Lesson
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/lessons"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Lessons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose GuitarPro Studios?</h2>
            <p className="text-xl text-gray-600">
              Quality instruction designed to help you achieve your musical goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Meet Your Instructor</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of teaching experience and a passion for music education, 
                I've helped hundreds of students discover the joy of playing guitar. Whether you're 
                picking up a guitar for the first time or looking to refine your technique, 
                I'm here to guide you every step of the way.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
              >
                Learn More About Me
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615268733971-6b9cecccb31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGd1aXRhcnxlbnwxfHx8fDE3NzEwODY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Music studio with guitars"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your Guitar Journey?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Book your first lesson today and discover the musician within you
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Started Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
