import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="w-full flex flex-row items-center justify-center gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="flex flex-row gap-7 items-center sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <div className="text-sm text-gray-600">
                &copy; Lugbtrans All rights reserved.
              </div>
              <div className="text-sm text-gray-600">+447925600353</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
