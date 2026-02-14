import { Check, Clock, Users, Video, Home } from 'lucide-react';
import { Link } from 'react-router';

export function Lessons() {
  const lessonTypes = [
    {
      title: 'Beginner Lessons',
      description: 'Perfect for those picking up a guitar for the first time',
      features: [
        'Basic chords and strumming patterns',
        'Reading guitar tabs',
        'Proper hand positioning and technique',
        'Simple songs you can play right away',
        'Music theory fundamentals',
      ],
      price: '$50',
      duration: '45 minutes',
    },
    {
      title: 'Intermediate Lessons',
      description: 'For players ready to expand their skills and repertoire',
      features: [
        'Advanced chord progressions',
        'Lead guitar and soloing techniques',
        'Music theory and scales',
        'Fingerstyle and picking patterns',
        'Genre-specific techniques',
      ],
      price: '$60',
      duration: '60 minutes',
      popular: true,
    },
    {
      title: 'Advanced Lessons',
      description: 'Master-level instruction for serious musicians',
      features: [
        'Complex improvisation techniques',
        'Advanced music theory',
        'Performance preparation',
        'Recording and production basics',
        'Professional development',
      ],
      price: '$75',
      duration: '60 minutes',
    },
  ];

  const formats = [
    {
      icon: Home,
      title: 'In-Person Lessons',
      description: 'Learn in our professional studio with all necessary equipment provided.',
    },
    {
      icon: Video,
      title: 'Online Lessons',
      description: 'Convenient virtual lessons via video call from the comfort of your home.',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Learn alongside other students in small groups (max 4 students).',
    },
  ];

  const styles = [
    'Rock & Pop',
    'Blues',
    'Jazz',
    'Classical',
    'Folk & Country',
    'Metal',
    'Fingerstyle',
    'Flamenco',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Guitar Lessons</h1>
            <p className="text-xl text-gray-300">
              Personalized instruction tailored to your goals, schedule, and musical interests
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Formats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Lesson Formats</h2>
            <p className="text-xl text-gray-600">
              Choose the learning style that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                  <format.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-3">{format.title}</h3>
                <p className="text-gray-600">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Pricing & Packages</h2>
            <p className="text-xl text-gray-600">
              Flexible options to fit your schedule and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lessonTypes.map((lesson, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  lesson.popular ? 'ring-2 ring-amber-500' : ''
                }`}
              >
                {lesson.popular && (
                  <div className="bg-amber-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 mb-6">{lesson.description}</p>

                  <div className="mb-6">
                    <div className="text-4xl text-amber-600 mb-2">
                      {lesson.price}
                      <span className="text-lg text-gray-600">/lesson</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {lesson.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                      lesson.popular
                        ? 'bg-amber-600 text-white hover:bg-amber-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Package discounts available: 4 lessons for 5% off, 8 lessons for 10% off
            </p>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Styles I Teach</h2>
            <p className="text-xl text-gray-600">
              Instruction available in a wide variety of musical genres
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {styles.map((style, index) => (
              <div
                key={index}
                className="bg-amber-50 p-4 rounded-lg text-center font-semibold text-gray-900"
              >
                {style}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl mb-2">Do I need my own guitar?</h3>
              <p className="text-gray-600">
                Yes, having your own guitar is recommended for practice at home. I can provide 
                guidance on selecting the right guitar for your needs and budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl mb-2">How often should I take lessons?</h3>
              <p className="text-gray-600">
                Most students benefit from weekly lessons, but we can customize a schedule that 
                works for you. Consistency is key to making steady progress.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl mb-2">What's your cancellation policy?</h3>
              <p className="text-gray-600">
                I require 24 hours notice for cancellations. Lessons cancelled with less notice 
                will be charged at the full rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-amber-600 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Book your first lesson today and take the first step toward your musical goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Me Now
          </Link>
        </div>
      </section>
    </div>
  );
}
