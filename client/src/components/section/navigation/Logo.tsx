import logoPath from '@assets/logo-sayle_1750644418509.webp';

export function Logo() {
  return (
    <div className="flex items-center flex-shrink-0">
      <img src={logoPath} alt="Sayle.ai Logo" className="h-6 w-auto" />
    </div>
  );
}
