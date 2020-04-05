import config from '@src/config';

const { links } = config;

export const fakeProjectData = {
  title: 'Project A',
  about: 'Quisque sed dictum ligula. Nulla augue elit, ultrices sed sagittis sed, hendrerit dapibus urna. Donec rhoncus pellentesque commodo. Cras posuere enim ipsum, eget volutpat ex accumsan sed.',
  links: [
    {
      type: 'github',
      url: links.github,
    },
  ],
};

export const test = {
  title: 'Project A',
  about: 'ipiscing elit. Vestibulum quis pharetra elit. Vivamus a justo quis mauris volutpat ultricies nec vitae urna. Donec libero felis, elementum id ullamcorper sit amet, iaculis sit amet neque. Integer congue id enim eget auctor. Mauris iaculis nisi id fermentum laoreet. Etiam quis scelerisque lorem, non ornare arcu. Curabitur maximus, orci in auctor bibendum, elit ante dapibus turpis, vitae dictum massa arcu vel nulla. Maecenas quis lorem non orci venenatis ultricies. Aenean cursus justo non pharetra iaculis. Nullam luctus, diam et maximus imperdiet, dui enim aliquet est, sed vehicula elit urna eget lectus. Integer sit amet libero dignissim nulla sollicitudin suscipit. Vestibulum pellentesque risus eu turpis imperdiet malesuada.',
  links: [
    {
      type: 'github',
      url: links.github,
    },
    {
      type: 'linkedIn',
      url: links.linkedin,
    },
  ],
};
