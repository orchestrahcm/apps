// page: IPageDesign
// container: IContainer

function run(page: IPageDesign, container: IContainer) {
  const pernr = container.UserPernr;
  const lang = page.Langu;

  let _executeIcon: string = "streamline-ultimate-color:time-clock-circle";

  // page.Messages = page.Messages || [];
  // page.Messages.push({
  //   Title: "INFO",
  //   Text: `Program calisti: ${pernr} / ${lang}`,
  //   IsError: false
  // });

  var _reportViewer = page.Elements.filter(o => o.FieldName === "reportViewer")[0];

  if (_reportViewer) {
    if (container.Langu == "TR") {
      // _reportViewer.Title = "Personel Raporları";
      // _reportViewer.SubTitle = "";
      _reportViewer.Nodes = [
        {
          IconName: "material-symbols:folder-outline",
          NodeId: "Node1",
          NodeText: "Personel Raporları",
          Expanded: false,
          Selected: false,
          IsPostBack: false,
          ToolTip: "Devam Raporu, Devamsızlık Raporu...",
          Children: [
            {
              IconName: _executeIcon,
              NodeId: "repESS2002",
              NodeText: "Devam Raporu (Eğitim, Görev, HO vs.)",
              Expanded: false,
              Selected: false,
              IsPostBack: false,

            },
            {
              IconName: _executeIcon,
              NodeId: "repESS2001",
              NodeText: "Devamsızlık Raporu",
              Expanded: false,
              Selected: false,
              IsPostBack: false
            },
            {
              IconName: _executeIcon,
              NodeId: "repESS2061",
              NodeText: "İzin Hedefleri Raporu",
              Expanded: false,
              Selected: false,
              IsPostBack: false
            },
            {
              IconName: _executeIcon,
              NodeId: "repESS2006",
              NodeText: "Yıllık İzin Hakediş Raporu",
              Expanded: false,
              Selected: false,
              IsPostBack: false
            },
          ]
        }

      ]
    }
    else {
      // _reportViewer.Title = "Manager Reports";
      // _reportViewer.SubTitle = "";
      _reportViewer.Nodes = [
        {
          IconName: "material-symbols:folder-outline",
          NodeId: "Node1",
          NodeText: "Personnel Reports",
          Expanded: false,
          Selected: false,
          IsPostBack: false,
          ToolTip: "Attendances Report, Absences Report...",
          Children: [
            {
              IconName: _executeIcon,
              NodeId: "repESS2002",
              NodeText: "Attendance Report (Training, Task, Travel etc.)",
              Expanded: false,
              Selected: false,
              IsPostBack: false,

            },
            {
              IconName: _executeIcon,
              NodeId: "repESS2001",
              NodeText: "Absences Report",
              Expanded: false,
              Selected: false,
              IsPostBack: false
            },
            {
              IconName: _executeIcon,
              NodeId: "repESS2061",
              NodeText: "Leave Objectives Report",
              Expanded: false,
              Selected: false,
              IsPostBack: false
            },
            {
              IconName: _executeIcon,
              NodeId: "repess2006",
              NodeText: "Annual Leave Quota Report",
              Expanded: false,
              Selected: false,
              IsPostBack: false
            }
          ]
        }

      ]
    }

  }

  return {
    continueNext: true,
    page,
    container
  };
}