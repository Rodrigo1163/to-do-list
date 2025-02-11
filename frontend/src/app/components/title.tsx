interface TitlePageProps {
  title: string;
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <div className="w-4/5 bg-white rounded-md mx-auto py-4">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
    </div>
  );
}
