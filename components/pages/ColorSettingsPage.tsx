import React, { useState } from "react";
import svgPaths from "../../imports/svg-us6yw3ns9h";
import imgColorWheel from "figma:asset/36c56bd854b8f69f211dd8ee49c36448cac6ce1a.png";
import imgColorPicker from "figma:asset/ee9d56913d68b0e8b0bd715adaf1cd0cb46fb655.png";
import { FormTemplateSelector } from "../FormTemplateSelector";
import { FormRenderer } from "../FormRenderer";
import { formTemplates } from "../../data/FormTemplates";
import { ColorPicker } from "../ColorPicker";

interface ColorSettings {
  formBackgroundColor: string;
  formBackgroundBorderColor: string;
  fieldBorderColor: string;
  fieldBackgroundColor: string;
  fieldLabelTextColor: string;
  placeholderTextColor: string;
  inputTextColor: string;
  helpTextColor: string;
  buttonBG: string;
  buttonBorder: string;
  buttonTextColor: string;
}

interface LegacyFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ColorSettingsPageProps {
  onExportJSON: (colors?: ColorSettings, formData?: any, template?: any) => void;
  onExportHTML: (colors?: ColorSettings, formData?: any, template?: any) => void;
  onColorsChange: (colors: ColorSettings) => void;
  onFormDataChange: (formData: any) => void;
}

// Predefined color palettes
const colorPalettes = [
  {
    name: "Ocean Breeze",
    colors: ["#1e40af", "#3b82f6", "#60a5fa", "#dbeafe"],
    settings: {
      formBackgroundColor: "#f8fafc",
      formBackgroundBorderColor: "#e2e8f0",
      fieldBorderColor: "#cbd5e1",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#1e293b",
      placeholderTextColor: "#64748b",
      inputTextColor: "#0f172a",
      helpTextColor: "#475569",
      buttonBG: "#3b82f6",
      buttonBorder: "#2563eb",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Forest Green",
    colors: ["#14532d", "#16a34a", "#4ade80", "#dcfce7"],
    settings: {
      formBackgroundColor: "#f0fdf4",
      formBackgroundBorderColor: "#bbf7d0",
      fieldBorderColor: "#86efac",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#14532d",
      placeholderTextColor: "#16a34a",
      inputTextColor: "#14532d",
      helpTextColor: "#166534",
      buttonBG: "#16a34a",
      buttonBorder: "#15803d",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Mountain Mist",
    colors: ["#374151", "#6b7280", "#9ca3af", "#e5e7eb"],
    settings: {
      formBackgroundColor: "#f9fafb",
      formBackgroundBorderColor: "#e5e7eb",
      fieldBorderColor: "#d1d5db",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#111827",
      placeholderTextColor: "#6b7280",
      inputTextColor: "#111827",
      helpTextColor: "#4b5563",
      buttonBG: "#6b7280",
      buttonBorder: "#4b5563",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Desert Sand",
    colors: ["#b45309", "#d97706", "#f59e0b", "#fef3c7"],
    settings: {
      formBackgroundColor: "#fffbeb",
      formBackgroundBorderColor: "#fed7aa",
      fieldBorderColor: "#fdba74",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#92400e",
      placeholderTextColor: "#d97706",
      inputTextColor: "#92400e",
      helpTextColor: "#b45309",
      buttonBG: "#d97706",
      buttonBorder: "#b45309",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Autumn Leaves",
    colors: ["#92400e", "#dc2626", "#f97316", "#fed7aa"],
    settings: {
      formBackgroundColor: "#fff7ed",
      formBackgroundBorderColor: "#ffedd5",
      fieldBorderColor: "#fdba74",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#9a3412",
      placeholderTextColor: "#ea580c",
      inputTextColor: "#9a3412",
      helpTextColor: "#c2410c",
      buttonBG: "#ea580c",
      buttonBorder: "#c2410c",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Spring Blossom",
    colors: ["#be185d", "#ec4899", "#f472b6", "#fce7f3"],
    settings: {
      formBackgroundColor: "#fdf2f8",
      formBackgroundBorderColor: "#f9a8d4",
      fieldBorderColor: "#f472b6",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#be185d",
      placeholderTextColor: "#db2777",
      inputTextColor: "#be185d",
      helpTextColor: "#c2185b",
      buttonBG: "#ec4899",
      buttonBorder: "#db2777",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Rainbow Spectrum",
    colors: ["#dc2626", "#f59e0b", "#10b981", "#3b82f6"],
    settings: {
      formBackgroundColor: "#f8fafc",
      formBackgroundBorderColor: "#e2e8f0",
      fieldBorderColor: "#cbd5e1",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#1e293b",
      placeholderTextColor: "#64748b",
      inputTextColor: "#0f172a",
      helpTextColor: "#475569",
      buttonBG: "#3b82f6",
      buttonBorder: "#2563eb",
      buttonTextColor: "#ffffff",
    },
  },
  {
    name: "Galaxy Purple",
    colors: ["#581c87", "#7c3aed", "#a855f7", "#e9d5ff"],
    settings: {
      formBackgroundColor: "#faf5ff",
      formBackgroundBorderColor: "#e9d5ff",
      fieldBorderColor: "#c4b5fd",
      fieldBackgroundColor: "#ffffff",
      fieldLabelTextColor: "#581c87",
      placeholderTextColor: "#7c3aed",
      inputTextColor: "#581c87",
      helpTextColor: "#6b21a8",
      buttonBG: "#7c3aed",
      buttonBorder: "#6b21a8",
      buttonTextColor: "#ffffff",
    },
  },
];

// Default template if formTemplates is not available
const defaultTemplate = {
  id: "default-contact",
  name: "Default Contact Form",
  description: "Basic contact form with essential fields",
  category: "Contact",
  fields: [
    {
      id: "firstName",
      name: "firstName",
      type: "text" as const,
      label: "First Name",
      placeholder: "Enter your first name...",
      helpText: "Please enter your first name",
      required: true,
    },
    {
      id: "lastName",
      name: "lastName",
      type: "text" as const,
      label: "Last Name",
      placeholder: "Enter your last name...",
      helpText: "Please enter your last name",
      required: true,
    },
    {
      id: "email",
      name: "email",
      type: "email" as const,
      label: "Email Address",
      placeholder: "user@example.com",
      helpText: "We'll use this to send you updates",
      required: true,
    },
    {
      id: "message",
      name: "message",
      type: "textarea" as const,
      label: "Message",
      placeholder: "Type your message here...",
      helpText: "Optional additional information",
      required: false,
    },
  ],
  createdAt: new Date("2024-01-01"),
  isPopular: true,
  isFeatured: true,
};

// Professional Color Picker Component
interface ProfessionalColorPickerProps {
  currentColor: string;
  onColorChange: (color: string) => void;
  fieldKey: string;
}

function ProfessionalColorPicker({ currentColor, onColorChange, fieldKey }: ProfessionalColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[60]">
      {/* Color Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-[9999px] shrink-0 size-[30px] cursor-pointer transition-all duration-300 ease-out transform-gpu backface-hidden hover:scale-110 hover:shadow-lg active:scale-95"
      >
        <div 
          className="relative rounded-[9999px] size-full"
          style={{ backgroundColor: currentColor }}
        >
          <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px] transition-all duration-300 ease-out hover:border-blue-300" />
        </div>
      </button>

      {/* Professional Color Picker */}
      <ColorPicker
        currentColor={currentColor}
        onColorChange={(color) => {
          onColorChange(color);
          setIsOpen(false);
        }}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        fieldKey={fieldKey}
      />
    </div>
  );
}

export function ColorSettingsPage({
  onExportJSON,
  onExportHTML,
  onColorsChange,
  onFormDataChange,
}: ColorSettingsPageProps) {
  const [activeTab, setActiveTab] = useState<
    "form-templates" | "color-settings"
  >("form-templates");
  const [colorMode, setColorMode] = useState<"predefined" | "custom">(
    "predefined",
  );
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [customColors, setCustomColors] = useState<ColorSettings>(
    colorPalettes[0].settings,
  );
  const [formData, setFormData] = useState<LegacyFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Safe template initialization with fallback
  const safeFormTemplates =
    formTemplates &&
    Array.isArray(formTemplates) &&
    formTemplates.length > 0
      ? formTemplates
      : [defaultTemplate];

  const [currentTemplate, setCurrentTemplate] = useState(
    safeFormTemplates[0],
  );

  const currentColors =
    colorMode === "predefined"
      ? colorPalettes[selectedPalette].settings
      : customColors;

  React.useEffect(() => {
    onColorsChange(currentColors);
  }, [currentColors, onColorsChange]);

  React.useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handlePaletteSelect = (index: number) => {
    setSelectedPalette(index);
  };

  const handleCustomColorChange = (
    key: keyof ColorSettings,
    value: string,
  ) => {
    const newColors = { ...customColors, [key]: value };
    setCustomColors(newColors);
  };

  const resetToTemplate = () => {
    setCustomColors(colorPalettes[selectedPalette].settings);
  };

  const handleFormDataUpdate = (newFormData: any, selectedTemplate?: any) => {
    console.log("handleFormDataUpdate called with:", {
      newFormData,
      selectedTemplate,
    });

    setFormData(newFormData);
    onFormDataChange(newFormData);

    // If a specific template is provided, use it
    if (selectedTemplate) {
      console.log("Setting current template to:", selectedTemplate);
      setCurrentTemplate(selectedTemplate);
      return;
    }

    // Try to find the template that matches this form data structure
    const matchingTemplate = safeFormTemplates.find((template) => {
      const templateFieldNames = template.fields.map((f) => f.name).sort();
      const formDataKeys = Object.keys(newFormData).sort();
      return (
        JSON.stringify(templateFieldNames) === JSON.stringify(formDataKeys)
      );
    });

    if (matchingTemplate) {
      console.log("Found matching template:", matchingTemplate);
      setCurrentTemplate(matchingTemplate);
    } else {
      console.log("No matching template found, using default");
      // Fallback to default template if no match found
      setCurrentTemplate(safeFormTemplates[0]);
    }
  };

  // Helper function to handle exports with current state
  const handleExportJSON = () => {
    console.log("Exporting JSON with:", {
      colors: currentColors,
      formData: formData,
      template: currentTemplate,
    });
    onExportJSON(currentColors, formData, currentTemplate);
  };

  const handleExportHTML = () => {
    console.log("Exporting HTML with:", {
      colors: currentColors,
      formData: formData,
      template: currentTemplate,
    });
    onExportHTML(currentColors, formData, currentTemplate);
  };

  return (
    <div
      className="min-h-screen w-full transition-all duration-500 ease-out"
      style={{
        backgroundImage:
          "linear-gradient(144.629deg, rgb(249, 250, 251) 0%, rgb(239, 246, 255) 100%)",
      }}
    >
      {/* Centered Container */}
      <div className="flex flex-col items-center min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start min-h-inherit px-0 py-20 relative w-full max-w-[1400px] mx-auto transition-all duration-500 ease-out">
          {/* Main Container */}
          <div className="relative rounded-[10px] shrink-0 w-full max-w-[1400px] transition-all duration-500 ease-out">
            <div className="flex flex-col items-center relative size-full">
              <div className="box-border content-stretch flex flex-col gap-7 items-center justify-start px-7 py-0 relative w-full">
                {/* Header */}
                <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-center w-full transition-all duration-500 ease-out transform-gpu">
                  <div className="flex flex-col font-bold h-[25px] justify-center relative shrink-0 text-[#101828] text-[28px] w-[560px] transition-all duration-500 ease-out hover:scale-105">
                    <p className="block leading-[24.5px]">
                      Generate Forms
                    </p>
                  </div>
                  <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#4a5565] text-[11.8922px] w-[390px] transition-all duration-500 ease-out">
                    <p className="block leading-[21px]">
                      Choose from pre-defined color templates
                      and customize them to create your perfect
                      color scheme.
                    </p>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="box-border content-stretch flex flex-row items-start justify-center leading-[0] p-0 relative shrink-0 w-full">
                  {/* Left Panel */}
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 transition-all duration-500 ease-out">
                    <div className="[grid-area:1_/_1] h-[1203px] ml-0 mt-0 relative w-[700px] transition-all duration-500 ease-out">
                      <svg
                        className="block size-full transition-all duration-500 ease-out"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 700 1203"
                      >
                        <path
                          d="M8.75 0.5H699.5V1202.5H8.75C4.19366 1202.5 0.500011 1198.81 0.5 1194.25V8.75C0.500008 4.19366 4.19366 0.5 8.75 0.5Z"
                          fill="white"
                          stroke="#E5E7EB"
                          className="transition-all duration-500 ease-out"
                        />
                      </svg>
                    </div>

                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-16 items-center justify-start ml-[69px] mt-12 p-0 relative w-[561px] transition-all duration-500 ease-out overflow-visible">
                      {/* Tab Switcher */}
                      <div className="box-border content-stretch flex flex-col gap-[46px] items-center justify-start p-0 relative shrink-0 w-[560px] transition-all duration-500 ease-out">
                        <div className="bg-[#ffffff] h-[66px] relative rounded-lg shrink-0 transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.01] transform-gpu">
                          <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-300 ease-out" />
                          <div className="flex flex-row items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-2 h-[66px] items-center justify-center p-[16px] relative">
                              {/* Form Templates Tab */}
                              <button
                                onClick={() =>
                                  setActiveTab("form-templates")
                                }
                                className={`
                                  basis-0 grow min-h-px min-w-px relative rounded-[8.75px] shrink-0 overflow-hidden
                                  transition-all duration-300 ease-out transform-gpu
                                  ${
                                    activeTab ===
                                    "form-templates"
                                      ? "bg-[#0051ff] shadow-lg scale-[1.02]"
                                      : "bg-transparent hover:bg-gray-50 hover:scale-[1.01]"
                                  }
                                `}
                              >
                                <div className="flex flex-col items-center justify-center relative size-full">
                                  <div className="box-border content-stretch flex flex-col items-center justify-center px-7 py-3.5 relative w-full">
                                    <div
                                      className={`
                                      flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 
                                      text-[15.375px] text-center text-nowrap transition-all duration-300 ease-out
                                      ${
                                        activeTab ===
                                        "form-templates"
                                          ? "text-[#ffffff] font-medium"
                                          : "text-[#310404] hover:text-[#1e293b]"
                                      }
                                    `}
                                    >
                                      <p className="block leading-[17.5px] whitespace-pre">
                                        Form Templates
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </button>

                              {/* Color Settings Tab */}
                              <button
                                onClick={() =>
                                  setActiveTab("color-settings")
                                }
                                className={`
                                  basis-0 grow min-h-px min-w-px relative rounded-[8.75px] shrink-0 overflow-hidden
                                  transition-all duration-300 ease-out transform-gpu
                                  ${
                                    activeTab ===
                                    "color-settings"
                                      ? "bg-[#0051ff] shadow-lg scale-[1.02]"
                                      : "bg-transparent hover:bg-gray-50 hover:scale-[1.01]"
                                  }
                                `}
                              >
                                <div className="flex flex-col items-center justify-center relative size-full">
                                  <div className="box-border content-stretch flex flex-col items-center justify-center px-7 py-3.5 relative w-full">
                                    <div
                                      className={`
                                      flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 
                                      text-[15.375px] text-center text-nowrap transition-all duration-300 ease-out
                                      ${
                                        activeTab ===
                                        "color-settings"
                                          ? "text-[#ffffff] font-medium"
                                          : "text-[#310404] hover:text-[#1e293b]"
                                      }
                                    `}
                                    >
                                      <p className="block leading-[17.5px] whitespace-pre">
                                        Color Settings
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Tab Content - Add padding to prevent cropping */}
                        <div className="w-full transition-all duration-500 ease-out p-2 -m-2">
                          {activeTab === "form-templates" ? (
                            <div className="animate-in slide-in-from-left-4 duration-500">
                              <FormTemplateSelector
                                onFormDataChange={
                                  handleFormDataUpdate
                                }
                              />
                            </div>
                          ) : (
                            <div className="animate-in slide-in-from-right-4 duration-500">
                              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
                                {/* Color Mode Selector */}
                                <div className="relative shrink-0 w-full">
                                  <div className="flex flex-row justify-center relative size-full">
                                    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-center px-4 py-0 relative w-full">
                                      {/* Pre-Define Color Option */}
                                      <button
                                        onClick={() =>
                                          setColorMode(
                                            "predefined",
                                          )
                                        }
                                        className={`
                                          basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-lg shrink-0 
                                          transition-all duration-300 ease-out transform-gpu backface-hidden group
                                          ${
                                            colorMode ===
                                            "predefined"
                                              ? "shadow-lg scale-[1.02] ring-2 ring-blue-500 ring-opacity-50"
                                              : "hover:shadow-md hover:scale-[1.01] hover:ring-2 hover:ring-gray-300 hover:ring-opacity-50"
                                          }
                                        `}
                                      >
                                        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-300 ease-out" />
                                        <div className="flex flex-row items-center relative size-full">
                                          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-5 relative w-full">
                                            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                                              <div
                                                className={`
                                                [grid-area:1_/_1] ml-0 mt-0 relative rounded-[9999px] size-5 
                                                transition-all duration-300 ease-out transform-gpu
                                                ${
                                                  colorMode ===
                                                  "predefined"
                                                    ? "bg-[#0051ff] scale-110 shadow-lg shadow-blue-200/50"
                                                    : "bg-gray-200 hover:bg-gray-300 hover:scale-110 group-hover:shadow-md"
                                                }
                                              `}
                                              >
                                                <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px] transition-all duration-300 ease-out" />
                                              </div>
                                              <div className="[grid-area:1_/_1] bg-[#ffffff] ml-[5.714px] mt-[5.714px] rounded-[9999px] size-[8.571px] transition-all duration-300 ease-out" />
                                            </div>
                                            <div
                                              className="bg-center bg-cover bg-no-repeat shrink-0 size-9 transition-all duration-300 ease-out group-hover:scale-110 transform-gpu"
                                              style={{
                                                backgroundImage: `url('${imgColorWheel}')`,
                                              }}
                                            />
                                            <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap transition-all duration-300 ease-out group-hover:font-medium">
                                              <p className="block leading-[16px] whitespace-pre">
                                                Pre-Define Color
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </button>

                                      {/* Custom Color Option */}
                                      <button
                                        onClick={() =>
                                          setColorMode("custom")
                                        }
                                        className={`
                                          basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-lg shrink-0 
                                          transition-all duration-300 ease-out transform-gpu backface-hidden group
                                          ${
                                            colorMode ===
                                            "custom"
                                              ? "shadow-lg scale-[1.02] ring-2 ring-blue-500 ring-opacity-50"
                                              : "hover:shadow-md hover:scale-[1.01] hover:ring-2 hover:ring-gray-300 hover:ring-opacity-50"
                                          }
                                        `}
                                      >
                                        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-300 ease-out" />
                                        <div className="flex flex-row items-center relative size-full">
                                          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-5 relative w-full">
                                            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                                              <div
                                                className={`
                                                [grid-area:1_/_1] ml-0 mt-0 relative rounded-[9999px] size-5 
                                                transition-all duration-300 ease-out transform-gpu
                                                ${
                                                  colorMode ===
                                                  "custom"
                                                    ? "bg-[#0051ff] scale-110 shadow-lg shadow-blue-200/50"
                                                    : "bg-gray-200 hover:bg-gray-300 hover:scale-110 group-hover:shadow-md"
                                                }
                                              `}
                                              >
                                                <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px] transition-all duration-300 ease-out" />
                                              </div>
                                              <div className="[grid-area:1_/_1] bg-[#ffffff] ml-[5.714px] mt-[5.714px] rounded-[9999px] size-[8.571px] transition-all duration-300 ease-out" />
                                            </div>
                                            <div
                                              className="bg-center bg-cover bg-no-repeat shrink-0 size-9 transition-all duration-300 ease-out group-hover:scale-110 transform-gpu"
                                              style={{
                                                backgroundImage: `url('${imgColorPicker}')`,
                                              }}
                                            />
                                            <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap transition-all duration-300 ease-out group-hover:font-medium">
                                              <p className="block leading-[16px] whitespace-pre">
                                                Custom Color
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                {/* Color Content - Add overflow visible container */}
                                {colorMode === "predefined" ? (
                                  <div className="max-h-[1000px] relative shrink-0 w-full animate-in slide-in-from-left-4 duration-500 overflow-visible">
                                    <div className="box-border content-stretch flex flex-col items-start justify-start max-h-inherit overflow-auto p-0 relative w-full">
                                      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start max-h-inherit px-0 py-4 relative w-full overflow-visible">
                                        {colorPalettes.map(
                                          (palette, index) => (
                                            <div
                                              key={palette.name}
                                              className="w-full p-1 -m-1 overflow-visible"
                                            >
                                              <button
                                                onClick={() =>
                                                  handlePaletteSelect(
                                                    index,
                                                  )
                                                }
                                                className={`
                                                relative rounded-lg shrink-0 w-full 
                                                transition-all duration-300 ease-out transform-gpu backface-hidden group
                                                ${
                                                  selectedPalette ===
                                                  index
                                                    ? "bg-blue-50 shadow-lg border-2 border-blue-500"
                                                    : "bg-[#ffffff] border border-gray-200 hover:bg-gray-50 hover:shadow-md hover:border-2 hover:border-gray-300"
                                                }
                                              `}
                                              >
                                                <div className="absolute inset-0 pointer-events-none rounded-lg" />
                                                <div className="relative size-full">
                                                  <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[17px] relative w-full">
                                                    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                                                      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
                                                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-gray-900 text-nowrap transition-all duration-300 ease-out group-hover:font-semibold">
                                                          <p className="block leading-[20px] whitespace-pre">
                                                            {
                                                              palette.name
                                                            }
                                                          </p>
                                                        </div>
                                                      </div>
                                                      {selectedPalette ===
                                                        index && (
                                                        <div className="relative shrink-0 size-4 animate-in zoom-in-50 duration-300">
                                                          <svg
                                                            className="block size-full"
                                                            fill="none"
                                                            preserveAspectRatio="none"
                                                            viewBox="0 0 16 16"
                                                          >
                                                            <rect
                                                              fill="#3B82F6"
                                                              height="16"
                                                              rx="8"
                                                              width="16"
                                                            />
                                                            <path
                                                              d="M11.125 5.8125L6.75 10.1875L4.875 8.3125"
                                                              stroke="white"
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="1.875"
                                                            />
                                                          </svg>
                                                        </div>
                                                      )}
                                                    </div>
                                                    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                                                      {palette.colors.map(
                                                        (
                                                          color,
                                                          colorIndex,
                                                        ) => (
                                                          <div
                                                            key={
                                                              colorIndex
                                                            }
                                                            className="relative rounded-[9999px] shrink-0 size-3.5 transition-all duration-300 ease-out transform-gpu group-hover:scale-110 hover:scale-125 hover:shadow-lg"
                                                            style={{
                                                              backgroundColor:
                                                                color,
                                                            }}
                                                          >
                                                            <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px] transition-all duration-300 ease-out" />
                                                          </div>
                                                        ),
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              </button>
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="animate-in slide-in-from-right-4 duration-500 overflow-visible">
                                    <CustomColorPicker
                                      colors={customColors}
                                      onColorChange={
                                        handleCustomColorChange
                                      }
                                      onResetToTemplate={
                                        resetToTemplate
                                      }
                                      selectedPalette={
                                        selectedPalette
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Live Preview */}
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 transition-all duration-500 ease-out">
                    <div className="[grid-area:1_/_1] h-[1203px] ml-0 mt-0 relative w-[700px] transition-all duration-500 ease-out">
                      <svg
                        className="block size-full transition-all duration-500 ease-out"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 700 1203"
                      >
                        <path
                          d="M691.25 0.5C695.806 0.5 699.5 4.19365 699.5 8.75V1194.25C699.5 1198.81 695.806 1202.5 691.25 1202.5H0.5V0.5H691.25Z"
                          fill="white"
                          stroke="#E5E7EB"
                          className="transition-all duration-500 ease-out"
                        />
                      </svg>
                    </div>

                    <div className="[grid-area:1_/_1] flex flex-col font-bold justify-center leading-[0] ml-[350px] mt-[60.5px] not-italic relative text-[#101828] text-[28px] text-center translate-x-[-50%] translate-y-[-50%] w-[560px] transition-all duration-500 ease-out hover:scale-105 transform-gpu">
                      <p className="block leading-[24.5px]">
                        Live Preview
                      </p>
                    </div>

                    {/* Full Form Preview - No Scroll */}
                    <div className="[grid-area:1_/_1] ml-[70px] mt-[155px] transition-all duration-500 ease-out flex items-start justify-center">
                      <div
                        style={{
                          transform: "scale(0.8)",
                          transformOrigin: "top center",
                        }}
                      >
                        <FormRenderer
                          colors={currentColors}
                          formData={formData}
                          template={currentTemplate}
                        />
                      </div>
                    </div>

                    {/* Export Buttons - Fixed Position */}
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-12 items-center justify-start ml-[0.5px] mt-[1059px] p-0 relative w-[699px] transition-all duration-500 ease-out">
                      <div className="h-0 relative shrink-0 w-[699px]">
                        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                          <svg
                            className="block size-full transition-all duration-500 ease-out"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 699 2"
                          >
                            <path
                              d="M0 1H699"
                              stroke="#E5E7EB"
                              className="transition-all duration-500 ease-out"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
                        <button
                          onClick={handleExportJSON}
                          className="
                            bg-[#0051ff] relative rounded-[8.75px] shrink-0 
                            transition-all duration-300 ease-out transform-gpu backface-hidden group
                            hover:bg-[#0041cc] hover:scale-105 hover:shadow-lg hover:shadow-blue-200/50
                            active:scale-95 active:shadow-md
                            before:absolute before:inset-0 before:rounded-[8.75px] 
                            before:bg-gradient-to-r before:from-blue-600 before:to-blue-700
                            before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300
                          "
                        >
                          <div className="flex flex-row items-center justify-center relative size-full z-10">
                            <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
                              <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap transition-all duration-300 ease-out group-hover:font-medium">
                                <p className="block leading-[24px] whitespace-pre">
                                  Export JSON
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={handleExportHTML}
                          className="
                            bg-[#0051ff] relative rounded-[8.75px] shrink-0 
                            transition-all duration-300 ease-out transform-gpu backface-hidden group
                            hover:bg-[#0041cc] hover:scale-105 hover:shadow-lg hover:shadow-blue-200/50
                            active:scale-95 active:shadow-md
                            before:absolute before:inset-0 before:rounded-[8.75px] 
                            before:bg-gradient-to-r before:from-blue-600 before:to-blue-700
                            before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300
                          "
                        >
                          <div className="flex flex-row items-center justify-center relative size-full z-10">
                            <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
                              <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap transition-all duration-300 ease-out group-hover:font-medium">
                                <p className="block leading-[24px] whitespace-pre">
                                  Export HTML
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>

                        <button
                          className="
                          bg-gray-100 relative rounded-[8.75px] shrink-0 
                          transition-all duration-300 ease-out transform-gpu backface-hidden group
                          hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95
                          before:absolute before:inset-0 before:rounded-[8.75px] 
                          before:bg-gradient-to-r before:from-gray-200 before:to-gray-300
                          before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300
                        "
                        >
                          <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[8.75px] transition-all duration-300 ease-out group-hover:border-gray-400" />
                          <div className="flex flex-row items-center justify-center relative size-full z-10">
                            <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
                              <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:font-medium">
                                <p className="block leading-[24px] whitespace-pre">
                                  Export CSS
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>

                        <button
                          className="
                          bg-gray-100 relative rounded-[8.75px] shrink-0 
                          transition-all duration-300 ease-out transform-gpu backface-hidden group
                          hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95
                          before:absolute before:inset-0 before:rounded-[8.75px] 
                          before:bg-gradient-to-r before:from-gray-200 before:to-gray-300
                          before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300
                        "
                        >
                          <div className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-300 ease-out group-hover:border-gray-400" />
                          <div className="flex flex-row items-center justify-center relative size-full z-10">
                            <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-3 relative">
                              <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-700 text-nowrap transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:font-medium">
                                <p className="block leading-[24px] whitespace-pre">
                                  Copy Code
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom Color Picker Component with enhanced transitions
interface CustomColorPickerProps {
  colors: ColorSettings;
  onColorChange: (key: keyof ColorSettings, value: string) => void;
  onResetToTemplate: () => void;
  selectedPalette: number;
}

function CustomColorPicker({
  colors,
  onColorChange,
  onResetToTemplate,
  selectedPalette,
}: CustomColorPickerProps) {
  const colorSections = [
    {
      title: "Form Container",
      fields: [
        {
          key: "formBackgroundColor" as keyof ColorSettings,
          label: "Form Background color",
        },
        {
          key: "formBackgroundBorderColor" as keyof ColorSettings,
          label: "Form Background border color",
        },
      ],
    },
    {
      title: "Form Field",
      fields: [
        {
          key: "fieldBorderColor" as keyof ColorSettings,
          label: "Border color",
        },
        {
          key: "fieldBackgroundColor" as keyof ColorSettings,
          label: "Background Color",
        },
        {
          key: "fieldLabelTextColor" as keyof ColorSettings,
          label: "Field Label Text Color",
        },
        {
          key: "placeholderTextColor" as keyof ColorSettings,
          label: "Placeholder Text Color",
        },
        {
          key: "inputTextColor" as keyof ColorSettings,
          label: "Input Text Color",
        },
        {
          key: "helpTextColor" as keyof ColorSettings,
          label: "Help Text Color",
        },
      ],
    },
    {
      title: "Buttons",
      fields: [
        { key: "buttonBG" as keyof ColorSettings, label: "Button BG" },
        {
          key: "buttonBorder" as keyof ColorSettings,
          label: "Button border",
        },
        {
          key: "buttonTextColor" as keyof ColorSettings,
          label: "Button Text Color",
        },
      ],
    },
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-stretch justify-start p-0 relative shrink-0 w-[200%] transition-all duration-500 ease-out z-50">
      {/* Header with Reset Button */}
      <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] p-0 relative shrink-0 text-center text-nowrap w-full transition-all duration-500 ease-out">
        <div className="flex flex-col font-bold justify-center not-italic relative shrink-0 text-[#101828] text-[18px] transition-all duration-500 ease-out hover:scale-105 transform-gpu">
          <p className="block leading-[24.5px] text-nowrap whitespace-pre">
            Custom Colors
          </p>
        </div>
        <button
          onClick={onResetToTemplate}
          className="
            flex flex-col font-normal justify-center relative shrink-0 text-[12px] 
            transition-all duration-300 ease-out transform-gpu backface-hidden
            text-blue-600 hover:text-blue-700 hover:scale-105 hover:font-medium
            active:scale-95
          "
        >
          <p className="block leading-[16px] text-nowrap whitespace-pre">
            Reset to Template
          </p>
        </button>
      </div>

      {/* Custom Color Controls */}
      <div className="max-h-[1000px] relative rounded-lg shrink-0 w-full transition-all duration-500 ease-out hover:shadow-lg">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-h-inherit overflow-auto p-0 relative w-full">
          {colorSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="relative shrink-0 w-full transition-all duration-300 ease-out"
            >
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                {/* Section Header */}
                <div className="bg-gray-50 relative shrink-0 w-full transition-all duration-300 ease-out hover:bg-gray-100">
                  <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none transition-all duration-300 ease-out" />
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[11px] pt-2.5 px-4 relative w-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-gray-900 text-left w-full transition-all duration-300 ease-out hover:font-semibold">
                          <p className="block leading-[16px]">
                            {section.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Fields */}
                <div className="relative shrink-0 w-full">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
                      {section.fields.map((field, fieldIndex) => (
                        <div
                          key={field.key}
                          className={`
                            relative shrink-0 w-full group
                            transition-all duration-300 ease-out hover:bg-gray-50 transform-gpu
                            ${
                              fieldIndex < section.fields.length - 1
                                ? "border-b border-gray-100"
                                : ""
                            }
                          `}
                        >
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row items-center justify-between py-3 relative w-full">
                              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                                <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap transition-all duration-300 ease-out group-hover:text-gray-900 group-hover:font-medium">
                                  <p className="block leading-[20px] whitespace-pre">
                                    {field.label}
                                  </p>
                                </div>
                              </div>
                              <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                                <ProfessionalColorPicker
                                  currentColor={colors[field.key]}
                                  onColorChange={(color) => onColorChange(field.key, color)}
                                  fieldKey={field.key}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {sectionIndex < colorSections.length - 1 && (
                <div className="relative shrink-0 w-full">
                  <div className="absolute border-[1px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none transition-all duration-300 ease-out" />
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-lg transition-all duration-500 ease-out hover:border-blue-300 hover:shadow-blue-200/30" />
      </div>
    </div>
  );
}