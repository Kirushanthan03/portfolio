import { Card, CardContent } from '@/components/ui/card'


const debatePoints = [
   "1st Runnerup in International Speech Competition-IPTP",
  "Two times Champions in Inter-University Debate Competition Clash Of Minds ",
  "Winner of Best Presenter award in Leo District 306B1",
  "Best  Debater of 2023,Clash Of Minds Debate"
 
]

const leadershipPoints = [
  "Senior Prefect of Jaffna Hindu College(2018-2019)",
  "Vice-president of Leo club of Manipay parish (2023-2024)",
  "Batch Representative of First Year-2021",
  "Student Union Member-2022'"
]

export default function SoftSkills() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Skills & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - Debate & Public Speaking */}
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">Debate & Public Speaking</h3>
              
              {/* Photos Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img 
                  src="/debate.jpg" 
                  alt="Debate Competition" 
                  className="rounded-lg object-cover w-full h-[150px]"
                />
                <img 
                  src="/debate2.jpg" 
                  alt="Public Speaking" 
                  className="rounded-lg object-cover w-full h-[150px]"
                />
                <img 
                  src="/debate4.jpg" 
                  alt="TEDx Talk" 
                  className="rounded-lg object-cover w-full h-[150px]"
                />
                <img 
                  src="/debate5.jpg" 
                  alt="Presentation" 
                  className="rounded-lg object-cover w-full h-[150px]"
                />
              </div>

              {/* Points */}
              <ul className="space-y-3 list-disc pl-6">
                {debatePoints.map((point, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Right Container - Leadership */}
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">Leadership</h3>
              
              {/* Single Photo */}
              <div className="mb-6">
                <img 
                  src="/leaderf.jpeg" 
                  alt="Leadership" 
                  className="rounded-lg object-cover w-full h-[320px]"
                />
              </div>

              {/* Points */}
              <ul className="space-y-3 list-disc pl-6">
                {leadershipPoints.map((point, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}