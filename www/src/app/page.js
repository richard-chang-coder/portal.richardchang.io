import { Divider } from '@/components/atoms'
import {
    Hero3,
    Clients,
    AboutMe,
    Portfolio,
    Services,
    PortfolioSlider,
    CTA,
    Testimonials,
    DevelopmentServices,
    MyServices,
    Industries,
} from '@/components/organisms'

export default function Home() {
    return (
        <main tw="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero3 />
            <PortfolioSlider />

            <AboutMe />
            <Clients />
            <Divider />
            <MyServices />
            <Divider />
            <Industries />
            {/* <Divider /> */}
            {/* <Testimonials />
            <Portfolio /> */}
            <div className="bg-black">
                <div className="h-20 w-full rounded-b-full bg-background"></div>
            </div>
            <CTA />
            <Divider className="border-primary-lighten" />
        </main>
    )
}
