import { Button, Input, Typography } from "@/components";
import ExecuteTests from "@/components/execute-tests";
import { getApplications } from "@/util/applications"
import { Plus } from "react-feather";

export default async function Dashboard ()
{
    const applications = await getApplications();

    return (
        <main className="flex flex-col place-content-center items-center pt-navbar-2x ">
            <div className={'max-w-content-xs md:max-w-content w-full'}>
                
                <div
                className={'space-y-2'}
                >
                    <Typography variant="h2">
                        Dashboard
                    </Typography>

                    <div>
                        <Typography variant="p" className={'text-gray-600'}>
                            Welcome to your dashboard. Here you can see all of your applications.
                        </Typography>
                     </div>
                
                </div>

                <div
                className={'my-5 flex flex-col gap-4'}
                >
                    <ExecuteTests />
                </div>

                <div>
                    <Typography variant="h3" className={'mt-10 mb-5'}>
                        Your Applications
                    </Typography>

                    <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                        <div 
                        className={'cursor-pointer flex items-center justify-center gap-4 rounded-lg p-4 border border-dashed border-gray-200 bg-gray-50 w-full hover:bg-blue-50 transition duration-300'}
                        >
                            <div className={'flex flex-col items-center gap-2 rounded-full bg-gray-300/50 p-1'}>
                                <Plus size={24} className={'text-gray-700'} />
                            </div>
                            <Typography variant="p" className={'text-gray-700'}>
                                Add a new application
                            </Typography>
                        </div>

                        {
                            applications.map((application: any) => {
                                return (
                                    <div 
                                    className={'cursor-pointer flex flex-col gap-4 rounded-lg p-4 border border-gray-200 bg-gray-50 w-full'}
                                    key={application.id}>
                                        <Typography variant="h4">
                                            {application.name}
                                        </Typography>
                                        <Typography variant="p">
                                            {application.description}
                                        </Typography>
                                        <Typography variant="p-small" className={'text-blue-500'}>
                                            { application.base_url }
                                        </Typography>
                                        <Typography variant="p-small" className={'text-gray-600'}>
                                            { application.endpoints.length } { application.endpoints.length === 1 ? 'endpoint' : 'endpoints'}
                                        </Typography>
                                    </div>
                                )
                            })
                        } 
                    </div>
                
                </div>
            </div>
           
        </main>
    )
}