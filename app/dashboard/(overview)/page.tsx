import React from 'react';
import CardWrapper, { Card } from '../../ui/dashboard/cards';
import { lusitana } from '../../ui/font';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
}

const DashboardPage = async () => {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       <Suspense>
        <CardWrapper/>
       </Suspense>
      </div>
      <div className="grid-cols1 mt-6 grid gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
        <LatestInvoices/>
        </Suspense>
      </div>
    </main>
  );
};

export default DashboardPage;
