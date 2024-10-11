import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Menu, Search } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6" />
          <span className="sr-only">Open Tourism</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Locations
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Businesses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white bg-black bg-opacity-50 p-2 rounded">
                  Discover Local Wonders
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-xl md:text-2xl bg-black bg-opacity-50 p-2 rounded">
                  Support local businesses and explore sacred pilgrimage sites.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Search locations..." type="text" />
                  <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Locations</h2>
            <Tabs defaultValue="pilgrimage" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pilgrimage">Pilgrimage Sites</TabsTrigger>
                <TabsTrigger value="nature">Nature Spots</TabsTrigger>
              </TabsList>
              <TabsContent value="pilgrimage">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sacred Temple</CardTitle>
                      <CardDescription>Ancient pilgrimage site</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        alt="Sacred Temple"
                        className="w-full h-60 object-cover rounded-md"
                        height="300"
                        src="/placeholder.svg?height=300&width=400"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Holy Shrine</CardTitle>
                      <CardDescription>Spiritual sanctuary</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        alt="Holy Shrine"
                        className="w-full h-60 object-cover rounded-md"
                        height="300"
                        src="/placeholder.svg?height=300&width=400"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Sacred Mountain</CardTitle>
                      <CardDescription>Revered pilgrimage destination</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        alt="Sacred Mountain"
                        className="w-full h-60 object-cover rounded-md"
                        height="300"
                        src="/placeholder.svg?height=300&width=400"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="nature">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Serene Lake</CardTitle>
                      <CardDescription>Tranquil natural beauty</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        alt="Serene Lake"
                        className="w-full h-60 object-cover rounded-md"
                        height="300"
                        src="/placeholder.svg?height=300&width=400"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Lush Forest</CardTitle>
                      <CardDescription>Ancient woodland trails</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        alt="Lush Forest"
                        className="w-full h-60 object-cover rounded-md"
                        height="300"
                        src="/placeholder.svg?height=300&width=400"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Majestic Waterfall</CardTitle>
                      <CardDescription>Breathtaking natural wonder</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        alt="Majestic Waterfall"
                        className="w-full h-60 object-cover rounded-md"
                        height="300"
                        src="/placeholder.svg?height=300&width=400"
                        style={{
                          aspectRatio: "400/300",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Support Local Businesses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Artisan Crafts</CardTitle>
                  <CardDescription>Handmade local souvenirs</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Artisan Crafts"
                    className="w-full h-60 object-cover rounded-md"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Visit Store</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Local Cuisine</CardTitle>
                  <CardDescription>Authentic regional flavors</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Local Cuisine"
                    className="w-full h-60 object-cover rounded-md"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Menu</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Guided Tours</CardTitle>
                  <CardDescription>Expert local knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Guided Tours"
                    className="w-full h-60 object-cover rounded-md"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book a Tour</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Open Tourism. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}