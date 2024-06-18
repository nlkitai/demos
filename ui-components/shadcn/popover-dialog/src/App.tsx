import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { conversation } from "@/data/history";
import { models } from "@/data/models";
import { AiChat } from "@nlux/react";
import "@nlux/themes/nova.css";
import "./App.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "./components/ui/popover";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function App() {
  const { setTheme, theme } = useTheme();
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [mode, setMode] = useState("popover");
  const [isChatOpen, setIsChatOpen] = useState<
    "popover" | "drawer" | "dialog" | "none"
  >("none");
  const chatComponent = (
    <AiChat
      className="nlux-AiChat-style"
      adapter={models[selectedModelIndex].adapter()}
      initialConversation={conversation.chat}
      displayOptions={{ colorScheme: theme }}
      personaOptions={conversation.personas}
    />
  );
  const chatTriggerComponent = (
    <Button
      className="absolute right-4 bottom-5 rounded-full z-40"
      size="icon"
      onClick={() =>
        //@ts-ignore
        setIsChatOpen(isChatOpen === "none" ? mode : "none")
      }
    >
      {isChatOpen === "none" ? (
        <ChatBubbleIcon className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      )}
    </Button>
  );
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex   flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a
              href="/Users/salmen/Projects/nx/demos/ui-components/chatgpt-ui/public"
              className="flex items-center gap-2 font-semibold"
            >
              <Avatar className="rounded-none w-6 h-6">
                <AvatarImage src={"./nlux.png"} />
                <AvatarFallback>Nlux</AvatarFallback>
              </Avatar>
              <span>Your AI Assistant</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <form>
              <div className="relative flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    id="model"
                    className="flex gap-3 border items-start p-2 rounded-sm"
                  >
                    <img
                      src={models[selectedModelIndex].icon}
                      className="w-6 h-6 object-scale-down"
                    />
                    {models[selectedModelIndex].modelName}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {models.map((val, index) => (
                      <DropdownMenuItem
                        key={`models-${val.modelName}`}
                        className="z-[999989]"
                        onClick={() => setSelectedModelIndex(index)}
                      >
                        <div className="flex items-center gap-3 text-muted-foreground cursor-pointer z-auto">
                          <img
                            src={val.icon}
                            className="w-6 h-6 object-scale-down"
                          />
                          <div className="grid gap-0.5">
                            <span className="flex gap-1 items-center">
                              <p className=" font-medium text-foreground">
                                {val.modelName}
                              </p>
                              {index === selectedModelIndex && <Check />}
                            </span>
                            <p className="text-xs">{val.description}</p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <RadioGroup
                  className="flex"
                  value={mode}
                  onValueChange={setMode}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="popover" id="r1" />
                    <Label htmlFor="r1">Popover</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="drawer" id="r2" />
                    <Label htmlFor="r2">Drawer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dialog" id="r3" />
                    <Label htmlFor="r3">Dialog</Label>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("auto")}>
                <Monitor className="h-[1.2rem] w-[1.2rem] mr-2" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className=" flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {mode === "popover" && (
            <Popover open={isChatOpen === "popover"}>
              <PopoverAnchor asChild>{chatTriggerComponent}</PopoverAnchor>
              <PopoverContent className="w-96 h-[60vh]" side="top" align="end">
                {chatComponent}
              </PopoverContent>
            </Popover>
          )}
          {mode === "drawer" && (
            <Drawer onClose={() => setIsChatOpen("none")}>
              <DrawerTrigger asChild>{chatTriggerComponent}</DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-screen-md h-[80vh]">
                  {chatComponent}
                </div>
              </DrawerContent>
            </Drawer>
          )}
          {mode === "dialog" && (
            <Dialog
              open={isChatOpen === "dialog"}
              onOpenChange={(open) => !open && setIsChatOpen("none")}
            >
              <DialogTrigger asChild>{chatTriggerComponent}</DialogTrigger>
              <DialogContent>{chatComponent}</DialogContent>
            </Dialog>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
