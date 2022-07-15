export default function handler(req, res) {
  const year = (new Date()).getFullYear();
  res.status(200).json({
    copyright: `Copyright © ${year} Morteza Mirbostani`
  });
}