//
//  PVSBlueViewManager.m
//  MyProject
//
//  Created by Pavlos Vinieratos on 11/08/2020.
//

#import "PVSBlueViewManager.h"


@implementation PVSBlueViewManager

RCT_EXPORT_MODULE(PVSBlueView)


- (UIView *)view
{
  UIView *aBlueView = [[UIView alloc] init];

  aBlueView.backgroundColor = UIColor.blueColor;

  return aBlueView;
}

@end
