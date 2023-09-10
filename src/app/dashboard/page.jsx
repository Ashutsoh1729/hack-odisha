import Navigation from "../../component/dashboard/navigation"
import StationColumn from "../../component/dashboard/station"
import VeichleCard from "../../component/dashboard/veichle-card"
// import FooterPage from "@/components/main/footer"
// import Navbar from "@/components/navbar/navbar"
import Layout from "../../component/Layout";

const DashboardPage = async () => {
    return (
        <Layout>

            <div className=" w-full h-[100vh]">
                {/* Dashboard */}
                <div className="relative bg-white w-full h-full overflow-hidden flex flex-col items-center justify-start gap-[10px] text-center text-16xl text-black font-inter">
                    {/* <Header /> */}
                    <div className="bg-gray w-[1478px] overflow-hidden flex flex-row py-[79px] px-2.5 box-border items-center justify-center">
                        <div className="rounded-11xl bg-white w-[1316px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-center justify-start gap-[10px]">
                            <StationColumn/>
                            <Navigation />
                            <VeichleCard />
                        </div>
                    </div>
                </div> 
            </div>

                
    </Layout>
    )
}

export default DashboardPage