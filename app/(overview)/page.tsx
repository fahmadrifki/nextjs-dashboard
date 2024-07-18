import NavHeader from '@/app/ui/components/nav-header';
import NavFooter from '@/app/ui/components/nav-footer';
import HomeHeadline from '@/app/ui/home/headline';
import EditorPicks from '@/app/ui/home/editorpicks';

export default function Page() {
  return (
    <main className="min-h-screen">
      <NavHeader />
      <HomeHeadline />
      <EditorPicks />

      {/* <!-- Content Home --> */}
      <section className="white pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
          
            </div>
            <div className="col-12 col-lg-4">
            </div>

          </div>
        </div>
      </section>
      
      <NavFooter />
    </main>
  );
}
