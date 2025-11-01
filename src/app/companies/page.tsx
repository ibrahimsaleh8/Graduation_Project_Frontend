"use client";
import Container from "@/components/Layout/Container";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs";
import LoginCompaniesForm from "@/components/forms/LoginCompaniesForm";
import RegisterCompaniesForm from "@/components/forms/RegisterCompaniesForm";

export default function LoginPage() {
  return (
    <Container>
      <div className="w-full h-full flex items-center justify-center pt-16">
        <div className="lg:w-1/2 md:w-[90%] w-full bg-white dark:bg-box-bg rounded-md p-5  flex flex-col gap-6">
          <div className="text-center font-bold flex items-center gap-2 justify-center">
            <div className="w-11 h-11 text-white bg-main-blue-color rounded-md flex items-center justify-center">
              JW
            </div>
            Companies Auth
          </div>

          <Tabs defaultValue="register">
            <TabsList className="w-full dark:bg-[#161C27]">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContents className="!overflow-visible">
              <TabsContent className="overflow-visible" value="register">
                <RegisterCompaniesForm />
              </TabsContent>
              <TabsContent value="login">
                <LoginCompaniesForm />
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
