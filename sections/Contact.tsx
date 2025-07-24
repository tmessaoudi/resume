import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card.tsx";
import { MailIcon } from "../components/SVGIcons.tsx";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
            want to chat about technology, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently open to freelance opportunities, full-time positions, and interesting collaborations. Let's
              discuss how we can work together to bring your ideas to life.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center space-x-4">
                  <a href="mailto:tarek@messaoudi.dev" className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border">
                    <MailIcon className="h-6 w-6 text-blue-500" />
                  </a>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:tarek@messaoudi.dev" className="underline text-blue-700">tarek@messaoudi.dev</a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">What I'm Looking For:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Interesting technical challenges</li>
                <li>• Collaborative team environments</li>
                <li>• Projects using modern web technologies</li>
                <li>• Opportunities to learn and grow</li>
              </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form method="post" action="/api/contact" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="name"
                      value=""
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="email"
                      type="email"
                      value=""
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value=""
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows={5}
                    value=""
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Send
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
