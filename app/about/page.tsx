import { BookOpen, Users, Award, Heart } from 'lucide-react';
import { Card,} from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About BookNest
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your digital sanctuary for discovering, exploring, and collecting the world's finest books. 
            We believe every story deserves to find its perfect reader.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At BookNest, we're passionate about connecting readers with their next great adventure. 
                Whether you're seeking knowledge, escape, or inspiration, we curate a diverse collection 
                that speaks to every soul.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our platform is designed to make book discovery intuitive, purchasing seamless, 
                and reading communities vibrant. We're not just a bookstore – we're your literary companion.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <BookOpen className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Curated with Care
              </h3>
              <p className="text-muted-foreground">
                Every book in our collection is handpicked by our team of literary enthusiasts 
                who understand the power of a great story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Books Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25K+</div>
              <div className="text-muted-foreground">Happy Readers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Authors Featured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2>Community First</h2>
              </div>
              <div>
                <p className="text-base">
                  We believe in building a community where book lovers can connect, 
                  share recommendations, and discover new perspectives together.
                </p>
              </div>
            </Card>

            <Card className="text-center">
              <div>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2>Quality Assurance</h2>
              </div>
              <div>
                <p className="text-base">
                  From bestsellers to hidden gems, we maintain the highest standards 
                  in our selection process to ensure every book meets our quality criteria.
                </p>
              </div>
            </Card>

            <Card className="text-center">
              <div>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2>Passion for Reading</h2>
              </div>
              <div>
                <p className="text-base">
                  Our love for literature drives everything we do. We're not just selling books – 
                  we're sharing the magic of storytelling with the world.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Meet the BookNest Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            We're a diverse group of readers, writers, and tech enthusiasts united by our 
            love for books and commitment to creating the best possible reading experience.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Join Our Literary Journey
            </h3>
            <p className="text-muted-foreground text-lg">
              Whether you're a casual reader or a bibliophile, BookNest is here to be your 
              trusted companion in the wonderful world of books. Let's explore stories together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;