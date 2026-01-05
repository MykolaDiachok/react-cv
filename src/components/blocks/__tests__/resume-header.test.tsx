import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ResumeHeader } from '../resume-header.tsx';
import { ResumeProvider } from '../../../providers/resume-provider.tsx';

const mockResume = {
  name: 'John Doe',
  title: 'Senior Engineer',
  location: 'Kyiv, Ukraine',
  email: 'john@example.com',
  phone: '+380991112233',
};

vi.mock('../../../providers/use-resume.ts', () => ({
  useResume: () => ({ resume: mockResume }),
}));

describe('ResumeHeader', () => {
  it('renders resume information', () => {
    render(
      <ResumeProvider>
        <ResumeHeader />
      </ResumeProvider>,
    );

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Engineer/i)).toBeInTheDocument();
  });
});
